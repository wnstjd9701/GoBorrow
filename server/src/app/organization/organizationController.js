import { getOrganizationInfo, getOrganizationInfoDetail, getOrganizationProductInformation } from './organizationProvider.js';
import { ORGANIZATION_SEARCH_EMPTY } from '../../../config/baseResponseStatus.js';
class organizationController {
  /**
   *  API No. 5
   *  API Name : 기관 검색 API
   * [GET] /app/organization?organizationName=~
   */
  organizationInformation = async function (req, res) {
    console.log('hi');
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
   *  API No. 9
   *  API Name : 기관 정보 API
   * [GET] /app/organization/:organizationName
   */
  organizationDetail = async function (req, res) {
    const organizationName = req.params.keyword;
    const organizationInformationResult = await getOrganizationInfoDetail(organizationName);
    return res.send(organizationInformationResult);
  };
  /**
   *  API No. 10
   *  API Name : 물품 대여 API
   * [GET] /app/organization/:organizationId/:productId
   */
  organizationProductInfo = async function (req, res) {
    const organizationName = req.params.organizationName;
    const productId = req.params.productId;
    const organizationProductInfoResult = await getOrganizationProductInformation(organizationName, productId);
    return res.send(organizationProductInfoResult);
  };
}

export default new organizationController();
