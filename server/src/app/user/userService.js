import { createUserAccount } from './userDao.js';
import { idCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE, PASSWORD_WRONG } from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
// Create, Update, Delete

export async function createUser(id, password, name, phoneNumber, address, info, distinction) {
  const connection = await pool.getConnection(async (conn) => conn);
  console.log(connection);
  const userIdCheck = await idCheck(id);
  if (userIdCheck.length > 0) return ID_ALREADY_EXISTS; // id가 이미 존재할 경우

  const hashedPassword = createHash('sha512').update(password).digest('hex');
  const params = [id, hashedPassword, name, phoneNumber, address, info, distinction];
  const signUpResult = await createUserAccount(connection, params);
  console.log(signUpResult);
  connection.release();
  return SUCCESS;
}
