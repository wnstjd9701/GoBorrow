import { Router } from 'express';
const route = Router();

import userController from './userController.js';
//import { token, authentication } from '../../../config/jwtMiddleware.js';

route.post('/signUp', userController.postUser); // 회원가입 API
route.post('/login', userController.login); // 로그인 API
// app.get('/login', userController.authenticateAccessToken);
export default route;
