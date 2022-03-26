import { createUserAccount } from './userDao.js';
import { idCheck, userLoginCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE, PASSWORD_WRONG } from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
// Create, Update, Delete

export async function createUser(id, password, name, phoneNumber, address, info, distinction) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdCheck = await idCheck(id);
    if (userIdCheck.length > 0) return ID_ALREADY_EXISTS; // id가 이미 존재할 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword, name, phoneNumber, address, info, distinction];
    const signUpResult = createUserAccount(connection, params);
    console.log(signUpResult);

    return SUCCESS;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
  } finally {
    connection.release();
  }
}

export async function userLogin(id, password, distinction) {
  //   const userIdCheck = await idCheck(id);
  //   console.log('hi');
  //   if (userIdCheck.length < 1) return LOGIN_FAILURE; // code 1002 존재하지 않는 아이디
  //   const hashedPassword = await createHash('sha512').update(password).digest('hex');
  //   const params = [userIdCheck, hashedPassword];
  //   const userCheck = await userLoginCheck(params);
  //   if (userCheck.length < 1) return PASSWORD_WRONG; // code 2003
  //   const accessToken = jwt.sign({ id: id, distinction: distinction }, process.env.JWT_SECRET, {
  //     expiresIn: '15m',
  //   });
  //   const refreshToken = jwt.sign({ id: id, distinction: distinction }, process.env.JWT_SECRET, {
  //     expiresIn: '180 days',
  //   });
  //   return {
  //     message: SUCCESS,
  //     accessToken: accessToken,
  //     refreshToken: refreshToken,
  //   };
  // } catch (err) {
  //   console.log(err);
  // } finally {
  // }
}
