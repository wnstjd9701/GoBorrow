import { getOrganization } from './organizationService.js';
import { ORGANIZATION_SEARCH_EMPTY } from '../../../config/baseResponseStatus.js';
class organizationController {
  /**
   *  API No. 5
   *  API Name : 기관 검색 API
   * [GET] /app/organization?organizationName=~
   */
  organizationInformation = async function (req, res) {
    //  const organizationId = req.id;
    const organizationName = req.query.organizationName;
    if (organizationName === '') {
      // 아무것도 검색하지 않았을 경우
      return res.send(ORGANIZATION_SEARCH_EMPTY);
    }
    const organizationResult = await getOrganization(organizationName);
    return res.send(organizationResult);
  };
}

export default new organizationController();
