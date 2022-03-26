import { pool } from '../../../config/database.js';
import { selectUserId, checkPasswordByUserId } from './userDao.js';
// Read
export async function idCheck(id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const idCheckResult = await selectUserId(connection, id);
  connection.release();
  return idCheckResult;
}

export async function userLoginCheck(params) {
  const connection = await pool.getConnection(async (conn) => conn);
  const userCheckResult = await checkPasswordByUserId(connection, params);
  connection.release();
  return userCheckResult;
}
