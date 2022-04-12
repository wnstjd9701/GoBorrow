import { getOrganization, getOrganizationInfoDetail } from './organizationService.js';
import { ORGANIZATION_SEARCH_EMPTY } from '../../../config/baseResponseStatus.js';
class organizationController {
  /**
   *  API No. 5
   *  API Name : 기관 검색 API
   * [GET] /app/organization?organizationName=~
   */
  organizationInformation = async function (req, res) {
    //  const organizationId = req.id;
    const organizationName = req.query.keyword;
    if (organizationName === '') {
      // 아무것도 검색하지 않았을 경우
      return res.send(ORGANIZATION_SEARCH_EMPTY);
    }
    const organizationResult = await getOrganization(organizationName);
    return res.send(organizationResult);
  };
  /**
   *  API No. 6
   *  API Name : 기관 정보 API
   * [GET] /app/organization/:organizationName
   */
  organizationDetail = async function (req, res) {
    const organizationName = req.params.organizationName;
    const organizationInformationResult = await getOrganizationInfoDetail(organizationName);
    return res.send(organizationInformationResult);
  };
}

export default new organizationController();
