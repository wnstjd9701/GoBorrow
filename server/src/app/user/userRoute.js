import { Router } from 'express';
const router = Router();

import userController from './userController.js';
import { authentication, reissuanceToken } from '../../../config/jwtMiddleware.js';

router.post('/', userController.postUser); // 회원가입 API
router.post('/login', authentication, userController.login); // 로그인 API

// app.get('/login', userController.authenticateAccessToken);
export default router;
