import { Router } from 'express';
const router = Router();

import { authentication } from '../../../config/jwtMiddleware.js';
import organizationController from './organizationController.js';

router.get('/', organizationController.organizationInformation); // 기관 검색 API
router.get('/:organizationName', organizationController.organizationDetail); // 기관 정보 API
router.get('/:organizationName/:productId', authentication, organizationController.organizationProductInfo); // 대여 물품 리스트 API
router.post('/:organizationName/:productId', authentication, organizationController.productReservation); // 물품 대여 API

router.get('/products/reservation/1', authentication, organizationController.productReservationManagement); // 기관 물품 관리 페이지

export default router;
