import { pool } from '../../../config/database.js';
import { SERVER_CONNECT_ERROR, ORGANIZATION_SEARCH_RESULT, SUCCESS } from '../../../config/baseResponseStatus.js';
import { getOrganizationInfoByName, retrieveOrganizationInformation } from './organizationDao.js';

export async function getOrganizationInfo(organizationName) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationResult = await getOrganizationInfoByName(connection, organizationName);
    if (organizationResult.length > 0) {
      return {
        isSuccess: true,
        code: 1000,
        message: '성공',
        organizationResult,
      };
    }
    return ORGANIZATION_SEARCH_RESULT;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}

export async function getOrganizationInfoDetail(organizationName) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationInfoResult = await retrieveOrganizationInformation(connection, organizationName);
    if (organizationInfoResult.length > 0) {
      return {
        isSuccess: true,
        code: 1000,
        message: '성공',
        organizationInfoResult,
      };
    }
    return ORGANIZATION_SEARCH_RESULT;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}
