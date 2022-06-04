import {
  getOrganizationInfo,
  getOrganizationInfoDetail,
  getOrganizationProductInformation,
  getProductReservationStatus,
} from './organizationProvider.js';
import { userRentProduct } from './organizationService.js';
import { ORGANIZATION_SEARCH_EMPTY } from '../../../config/baseResponseStatus.js';
class organizationController {
  /**
   *  API No. 5
   *  API Name : 기관 검색 API
   * [GET] /app/organizations?organizationName=~
   */
  organizationInformation = async function (req, res) {
    //  const organizationId = req.id;
    const organizationName = req.query.keyword;
    if (organizationName === '') {
      // 아무것도 검색하지 않았을 경우
      return res.send(ORGANIZATION_SEARCH_EMPTY);
    }
    const organizationResult = await getOrganizationInfo(organizationName);
    return res.send(organizationResult);
  };
  /**
   *  API No. 6
   *  API Name : 기관 정보 API
   * [GET] /app/organizations/:organizationName
   */
  organizationDetail = async function (req, res) {
    const organizationName = req.params.organizationName;
    const organizationInformationResult = await getOrganizationInfoDetail(organizationName);
    return res.send(organizationInformationResult);
  };
  /**
   *  API No. 10
   *  API Name : 대여 물품 리스트 API
   * [GET] /app/organizations/:organizationName/:productId
   */
  organizationProductInfo = async function (req, res) {
    const organizationName = req.params.organizationName;
    const productId = req.params.productId;
    const organizationProductInfoResult = await getOrganizationProductInformation(organizationName, productId);
    return res.send(organizationProductInfoResult);
  };
  /**
   *  API No. 11
   *  API Name : 물품 예약 API
   * [POST] /app/organizations/:organizationName/:productId
   */
  productReservation = async function (req, res) {
    const userId = req.id;
    const organizationName = req.params.organizationName;
    const productId = req.params.productId;
    const itemId = req.body.itemId;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const certificationInfo = req.body.certificationInfo;
    const certificationImage = req.body.certificationImage;
    const productReservationResult = await userRentProduct(
      userId,
      organizationName,
      productId,
      itemId,
      startDate,
      endDate,
      certificationInfo,
      certificationImage,
    );
    return res.send(productReservationResult);
  };
  /**
   *  API No. 12
   *  API Name :
   * [GET] /app/organizations/products/reservation
   */
  productReservationManagement = async function (req, res) {
    //const organizationId = req.id;
    console.log(req.id);
    const organizationId = 'testorg2';
    console.log(1);
    const productReservationResult = await getProductReservationStatus(organizationId);
    return res.send(productReservationResult);
  };
}

export default new organizationController();
