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
  ADDRESS_EMPTY,
  PHONENUMBER_EMPTY,
  ID_LENGTH_ERROR,
  PASSWORD_LENGTH_ERROR,
} from '../../../config/baseResponseStatus.js';

class userController {
  /**
   * API No. 1
   * API Name : 사용자 회원가입  API
   * [POST] /app/users
   */
  postUser = async function (req, res) {
    const { id, password, name, phoneNumber, address, info, distinction } = req.body;
    if (!id) return res.send(NICKNAME_EMPTY); // code 2000
    if (id.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
    if (!password) return res.send(PASSWORD_EMPTY); // code 2001
    if (password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013
    if (!name) return res.send(SIGNUP_NAME_EMPTY); // code 2005
    if (!address) return res.send(ADDRESS_EMPTY); // code 2010
    if (!phoneNumber) return res.send(PHONENUMBER_EMPTY); //code 2011

    const signUpResponse = await createUser(id, password, name, phoneNumber, address, info, distinction);
    return res.send(signUpResponse);
  };

  /**
   *  API No. 2
   *  API Name : 사용자 로그인 API
   * [POST] /app/users/login
   */
  login = async function (req, res) {
    // distinction 1: 기업, 2: 사용자
    const { id, password, distinction } = req.body;
    if (!id) return res.send(ID_EMPTY); // code 2009
    if (id.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
    if (!password) return res.send(PASSWORD_EMPTY); // code 2003
    if (password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013

    const loginResult = await userLogin(id, password, distinction);
    return res.send(loginResult);
  };
  logout = async function (req, res) {
    res.cookie('accessToken', '', { maxAge: 1 });
    res.redirect('/app');
  };
}
export default new userController();
