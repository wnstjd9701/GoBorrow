import { createUser, userLogin } from './userService.js';
import {
  NICKNAME_EMPTY,
  PASSWORD_EMPTY,
  SIGNUP_VERIFIEDPASSWORD_EMPTY,
  SIGNUP_NAME_EMPTY,
  PASSWORD_WRONG,
  ID_EMPTY,
  TOKEN_VERIFICATION_FAILURE,
  SUCCESS,
} from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class userController {
  /**
   * API No. 1
   * API Name : 유저 생성 (회원가입) API
   * [POST] /app/users/signUp
   */
  postUser = async function (req, res) {
    const { distinction, id, password, verifiedPassword, name, address } = req.body;
    if (!id) return res.send(NICKNAME_EMPTY); // code 2000
    if (!password) return res.send(PASSWORD_EMPTY); // code 2001
    if (!verifiedPassword) return res.send(SIGNUP_VERIFIEDPASSWORD_EMPTY); // code 2004
    if (!name) return res.send(SIGNUP_NAME_EMPTY); // code 2005
    if (password != verifiedPassword) return res.send(PASSWORD_WRONG); // code 2003

    const signUpResponse = await createUser(distinction, id, password, name, address);
    return res.send(signUpResponse);
  };

  /**
   *  API No. 2
   *  API Name : 사용자 로그인 API
   * [POST] /app/users/login
   */
  login = async function (req, res) {
    const { distinction, id, password } = req.body;
    if (!id) return res.send(ID_EMPTY); // code 2009
    if (!password) return res.send(PASSWORD_EMPTY); // code 2003

    const signUpResponse = userLogin(distinction, id, password);
  };

  /**
   * Login Middleware
   */
  authenticateAccessToken = (req, res) => {
    let authHeader = req.headers['authorization'];
    const token = authHeader && req.headers.authorization.split('Bearer ')[1];
    if (!token) return res.send(baseResponse.TOKEN_EMPTY);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err.name);
      if (err) return res.json({ ErrorMesasage: err.name });

      req.user = user;
    });
  };
}
export default new userController();
