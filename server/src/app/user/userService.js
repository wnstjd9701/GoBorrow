import { createUserAccount, selectUserId } from './userDao.js';
import { idCheck, orgIdCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE } from '../../../config/baseResponseStatus.js';

import { createHash } from 'crypto';
// Create, Update, Delete

export async function createUser(distinction, id, password, name, address) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const hashedPassword = await createHash('sha512').update(password).digest('hex');
    if (distinction === 'organization') {
      const checkOrganizationId = orgIdCheck(id);
      if (checkOrganizationId.length >= 1) return ID_ALREADY_EXISTS;
    } else {
      const checkUserId = idCheck(id);
      if (checkUserId.length >= 1) return ID_ALREADY_EXISTS; // code 2008
      const params = [id, hashedPassword, name, address];

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
    }
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
    const hashedPassword = await createHash('sha512').update(password).digest('hex');
    if (distinction === 'organization') {
      const params = [id, hashedPassword];
      const confirmOrganization = confirmOrganizationInfo(connection, params);
      if (confirmOrganization.length >= 1) return SUCCESS; // code 1002
      else {
        return LOGIN_FAILURE; // code 1001
      }
    } else {
      const params = [id, hashedPassword];
      const confirmUser = confirmUserInfo(connection, params);
      if (confirmUser.length >= 1) return SUCCESS;
      else {
        return LOGIN_FAILURE;
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}
