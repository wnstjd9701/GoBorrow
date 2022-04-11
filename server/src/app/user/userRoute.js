import { Router } from 'express';
const router = Router();

import userController from './userController.js';
import { authentication } from '../../../config/jwtMiddleware.js';

router.post('/', userController.postUser); // 회원가입 API
router.post('/login', userController.login); // 로그인 API
<<<<<<< HEAD
router.get('/profile', authentication, userController.getProfile); //프로필 API
=======
router.post('/logout', userController.logout); //로그아웃 API
router.get('/profile/:userId', userController.getProfile); //프로필 API
>>>>>>> d4435a9ee9f7c4a85ed4518049f8c39eb6c85fbb
export default router;
