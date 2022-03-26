// Read
import { pool } from '../../../config/database.js';
import { selectUserId, selectOrganizationId } from './userDao.js';
export async function idCheck(id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const idCheckResult = await selectUserId(connection, id);
  connection.release();
  return idCheckResult;
}
export async function orgIdCheck(id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const idCheckResult = await selectOrganizationId(connection, id);
  connection.release();
  return idCheckResult;
}
