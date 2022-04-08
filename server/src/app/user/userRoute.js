import { Router } from 'express';
const router = Router();

import userController from './userController.js';
import { authentication, reissuanceToken } from '../../../config/jwtMiddleware.js';

router.post('/', userController.postUser); // 회원가입 API
router.post('/login', userController.login); // 로그인 API
router.get('/profile', userController.getProfile); //프로필 API
export default router;
