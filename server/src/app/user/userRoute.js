import { Router } from 'express';
const app = Router();

import userController from './userController.js';
//import { token, authentication } from '../../../config/jwtMiddleware.js';

app.post('/signUp', userController.postUser); // 회원가입 API
app.post('/login', userController.login); // 로그인 API
app.get('/login', userController.authenticateAccessToken);
export default app;
