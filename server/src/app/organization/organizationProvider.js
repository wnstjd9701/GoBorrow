import { pool } from '../../../config/database.js';
import { SERVER_CONNECT_ERROR, ORGANIZATION_SEARCH_RESULT, SUCCESS } from '../../../config/baseResponseStatus.js';
import {
  getOrganizationInfoByName,
  retrieveOrganizationInformation,
  retrieveOrganizaionProductInformation,
  retrieveOrganizationIdByProductId,
  getItemIdList,
  retrieveOrganizationProductRentList,
} from './organizationDao.js';

// READ
export async function getOrganizationInfo(organizationName) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationResult = await getOrganizationInfoByName(connection, organizationName);
    if (organizationResult.length > 0) {
      return {
        isSuccess: true,
        code: 1000,
        message: '성공',
        data: organizationResult,
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
        data: organizationInfoResult,
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

export async function getOrganizationProductInformation(organizationName, productId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const params = [organizationName, productId];
    const organizationProductInfoResult = await retrieveOrganizaionProductInformation(connection, params);
    return {
      isSuccess: true,
      code: 1000,
      message: '성공',
      data: organizationProductInfoResult,
    };
  } catch (err) {
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}

export async function checkProduct(itemId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const checkResult = await getItemIdList(connection, itemId);
    return checkResult;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  }
}

export async function getOrganizationIdByProductId(productId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationIdResult = await retrieveOrganizationIdByProductId(connection, productId);
    if (organizationIdResult.length < 1)
      return {
        isSuccess: false,
        code: 1001,
        message: '실패',
        data: organizationIdResult,
      };
    return {
      isSuccess: true,
      code: 1000,
      message: '성공',
      data: organizationIdResult,
    };
  } catch (err) {
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}

export async function getProductReservationStatus(organizationId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    console.log(organizationId);
    const organizationProductStatus = await retrieveOrganizationProductRentList(connection, organizationId);
    return organizationProductStatus;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  }
}
