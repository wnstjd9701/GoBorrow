import { Router } from 'express';
const router = Router();

import { authentication } from '../../../config/jwtMiddleware.js';
import organizationController from './organizationController.js';

router.get('/', organizationController.organizationInformation); // 기관 검색 API
router.get('/:organizationName', organizationController.organizationDetail); // 기관 정보 API
router.get('/:organizationName/:productId', organizationController.organizationProductInfo); // 대여 물품 리스트 API
//router.get('/org', organizationController.organizationMain); // 기관 관리 페이지 API
export default router;
