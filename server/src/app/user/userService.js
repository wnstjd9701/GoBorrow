import { createUserAccount, selectUserId } from './userDao.js';
import { idCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS } from '../../../config/baseResponseStatus.js';

import { createHash } from 'crypto';
// Create, Update, Delete

export async function createUser(distinction, id, password, name, address) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const checkUserId = idCheck(id);
    if (checkUserId.length >= 1) return ID_ALREADY_EXISTS; // code 2008

    const hashedPassword = await createHash('sha512').update(password).digest('hex');
    const params = [distinction, id, hashedPassword, name, address];

    const signUpResult = await createUserAccount(connection, params);
    const accessToken = jwt.sign({ id: req.body.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: req.body.id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '180 days',
    });
    return json({
      message: signUpResult,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
  } finally {
    connection.release();
  }
}
export async function userLogin(distinction, id, password) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    if (distinction == 'organization') {
      const params = [id, password];
      const confirmUser = userInfoConfirm(connection, params);
    } else {
    }
    const hashedPassword = await createHash('sha512').update(password).digest('hex');
    const checkUserAccount = userIdCheck(connection, id, password);
    if (checkUserAccount) return res.send();
    const params = [id, hashedPassword];

    const signUpResponse = await isUserLogin(connection, params);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}
