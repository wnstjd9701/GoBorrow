import { createUserAccount } from './userDao.js';
import { idCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE } from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
// Create, Update, Delete

export async function createUser(id, password, name, phoneNumber, address, info, distinction) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const checkUserId = await idCheck(id);
    if (checkUserId.length > 0) return ID_ALREADY_EXISTS;

    const hashedPassword = await createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword, name, phoneNumber, address, info, distinction];
    const signUpResult = await createUserAccount(connection, params);
    //console.log(`회원가입 계정 : ${signUpResult[0].insertId}`);
    console.log(signUpResult.ResultSetHeader);
    const accessToken = jwt.sign({ id: id, userRole: distinction }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: id, userRole: distinction }, process.env.JWT_SECRET, {
      expiresIn: '180 days',
    });
    console.log('access: ' + accessToken);
    console.log('refresh: ' + refreshToken);

    return {
      message: SUCCESS,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
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
      if (confirmOrganization.length >= 1) return SUCCESS;
      // code 1002
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
