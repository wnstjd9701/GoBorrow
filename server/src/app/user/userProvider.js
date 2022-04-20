// Read
import { SERVER_CONNECT_ERROR } from '../../../config/baseResponseStatus.js';
import { pool } from '../../../config/database.js';
import { selectUserId, selectOrganizationId, selectUserProfile } from './userDao.js';
// Read

export async function userIdCheck(userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdRow = await selectUserId(connection, userId);
    return userIdRow;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}

export async function organizationIdCheck(organizationId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationIdRow = await selectOrganizationId(connection, organizationId);
    return organizationIdRow;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}

export async function retrieveUserProfile(userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userProfileResult = await selectUserProfile(connection, userId);
    return { isSuccess: true, code: 1000, message: '성공', data: userProfileResult[0] };
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}
