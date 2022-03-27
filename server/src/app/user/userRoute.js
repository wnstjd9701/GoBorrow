import { Router } from 'express';
const router = Router();

import userController from './userController.js';
import { authentication, reissuanceToken } from '../../../config/jwtMiddleware.js';

// router.get('/testm authenticationm ~);
router.post('/', userController.postUser); // 회원가입 API
router.post('/login', userController.login); // 로그인 API
router.get('/logout', userController.logout); // 로그아웃 API

// app.get('/login', userController.authenticateAccessToken);
export default router;
