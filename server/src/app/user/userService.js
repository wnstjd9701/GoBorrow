const userDao = require('./userDao');
const { pool } = require('../../../config/database');
const baseResponse = require('../../../config/baseResponseStatus');

const crypto = require('crypto');

exports.createUser = async function (distinction, id, password, name, address) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const checkUserAcoount = userDao.checkUserId(connection, id);
    if (checkUserAcoount.length >= 1) return baseResponse.ID_ALREADY_EXISTS;

    const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
    const params = [distinction, id, hashedPassword, name, address];

    const signUpResult = await userDao.createUserAccount(connection, params);
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
  } finally {
    connection.release();
  }
};
