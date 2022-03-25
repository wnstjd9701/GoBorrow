import { createUser } from './userService.js';
import {
  NICKNAME_EMPTY,
  PASSWORD_EMPTY,
  SIGNUP_VERIFIEDPASSWORD_EMPTY,
  SIGNUP_NAME_EMPTY,
  PASSWORD_WRONG,
} from '../../../config/baseResponseStatus.js';

/**
 * API No. 1
 * API Name : 유저 생성 (회원가입) API
 * [POST] /app/users/signUp
 */
class userController {
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

  test = async function (req, res) {
    return res.send('test success');
  };
}

export default new userController();
