import { pool } from '../../../config/database.js';
import { SERVER_CONNECT_ERROR, ORGANIZATION_SEARCH_RESULT, SUCCESS, PRODUCT_DISAVAILABLE } from '../../../config/baseResponseStatus.js';
import { insertRentInfromataion } from './organizationDao.js';
import { getOrganizationIdByProductId, checkProduct } from './organizationProvider.js';
// CREATE, UPDATE, DELETE
export async function userRentProduct(
  userId,
  organizationName,
  productId,
  itemId,
  startDate,
  endDate,
  certificationInfo,
  certificationImage,
) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const newStartDate = new Date(startDate).toISOString().split('T')[0];
    const newStartTime = startDate.split(' ')[4];
    const newEndDate = new Date(endDate).toISOString().split('T')[0];
    const newEndTime = endDate.split(' ')[4];
    const getOrganizationId = await getOrganizationIdByProductId(productId);
    const organizationId = getOrganizationId.data[0].organizationId;
    const itemList = await checkProduct(itemId); // rent에서 itemId가 잇으면
    if (itemList.length > 0) return PRODUCT_DISAVAILABLE;

    const params = [userId, organizationId, itemId, productId, newStartDate, newStartTime, newEndDate, newEndTime];
    const rentResult = await insertRentInfromataion(connection, params);

    const certParams = [certificationInfo, certificationImage];
    const certificationResult = await insertCertificationInformation(connection, certParams);

    return {
      isSuccess: true,
      code: 1000,
      message: '성공',
    };
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
}
