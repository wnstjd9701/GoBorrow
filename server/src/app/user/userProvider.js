// Read
import { pool } from '../../../config/database.js';
import { selectUserId } from './userDao.js';
export async function idCheck(id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const idCheckResult = await selectUserId(connection, id);
  connection.release();
  return idCheckResult;
}
