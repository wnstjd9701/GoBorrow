import { pool } from '../../../config/database.js';
import { SERVER_CONNECT_ERROR, ORGANIZATION_SEARCH_RESULT, SUCCESS } from '../../../config/baseResponseStatus.js';
import { organizationIdCheck } from './organizationDao.js';

export async function getOrganization(organizationName) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationResult = await organizationIdCheck(connection, organizationName);
    if (organizationResult.length > 0) {
      return organizationResult;
    }
    return ORGANIZATION_SEARCH_RESULT;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}
