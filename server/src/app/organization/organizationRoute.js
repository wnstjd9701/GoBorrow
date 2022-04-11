import { Router } from 'express';
const router = Router();

import { authentication } from '../../../config/jwtMiddleware.js';
import organizationController from './organizationController.js';

router.get('/', organizationController.organizationInformation); // 기관 검색 API

export default router;
