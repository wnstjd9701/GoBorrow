// Read
import { pool } from '../../../config/database.js';
export async function idCheck(id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const idCheckResult = await userDao.selectUserId(connection, id);
  connection.release();

  return idCheckResult;
}
