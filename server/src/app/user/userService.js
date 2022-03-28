import { createUserAccount, checkPasswordByUserId, getUserInfo } from './userDao.js';
import { idCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE, PASSWORD_WRONG } from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import dotenv from 'dotenv';

dotenv.config('../../../.env');
// Create, Update, Delete

export async function createUser(id, password, name, phoneNumber, address, info, distinction) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdCheck = await idCheck(id);
    if (userIdCheck.length > 0) return ID_ALREADY_EXISTS; // id가 이미 존재할 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword, name, phoneNumber, address, info, distinction];
    const signUpResult = await createUserAccount(connection, params);
    connection.release();
    return SUCCESS;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}

export async function userLogin(id, password, distinction) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdCheck = await idCheck(id);
    if (userIdCheck.length < 1) return LOGIN_FAILURE; // code 1002 아이디가 존재 하지 않을 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword];
    const checkResult = await getUserInfo(connection, params);

    if (checkResult.length >= 1) {
      // DB에서 비교후에 id가 존재할 경우
      const accessToken = jwt.sign({ id: id, distinction: distinction }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ id: id, distinction: distinction }, process.env.JWT_SECRET, { expiresIn: '14 days' });
      return {
        message: SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } else {
      return PASSWORD_WRONG;
    }
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}
