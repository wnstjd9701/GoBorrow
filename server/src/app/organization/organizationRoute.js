import { Router } from 'express';
const router = Router();

import { authentication } from '../../../config/jwtMiddleware.js';
import organizationController from './organizationController.js';

router.get('/', organizationController.organizationInformation); // 기관 검색 API
router.get('/:organizationName', organizationController.organizationDetail); // 기관 정보 API
router.get('/:productId', organizationController.organizationProductInfo); // 물품 대여 API
router.get('/:productId');
export default router;
