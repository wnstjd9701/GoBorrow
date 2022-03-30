// Read
import { pool } from '../../../config/database.js';
import { selectUserId, selectOrganizationId } from './userDao.js';
export async function userIdCheck(userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdRow = await selectUserId(connection, userId);
    return userIdRow;
  } catch (err) {
  } finally {
    connection.release();
  }
}
export async function orgIdCheck(organizationId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationIdRow = await selectOrganizationId(connection, organizationId);
    return organizationIdRow;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}
