import { Router } from 'express';
const router = Router();

import userController from './userController.js';
import { authentication, reissuanceToken } from '../../../config/jwtMiddleware.js';

router.post('/', userController.postUser); // 회원가입 API
router.post('/login', userController.login); // 로그인 API
router.post('/logout', userController.logout); // 로그아웃 API
router.post('/test', function (req, res) {
  //지우지마세요! accessToken Test용입니다!
  console.log(req.cookies.refreshToken); //refreshToken 값
  console.log(req.headers.accesstoken); //accessToken 값
  return res.send(req.cookies);
}); // 로그아웃 API

export default router;
