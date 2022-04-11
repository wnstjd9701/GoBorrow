import { createUser, createOrganizationUser, userLogin, organizationUserLogin } from './userService.js';
import { retrieveUserProfile } from './userProvider.js';
import {
  NICKNAME_EMPTY,
  PASSWORD_EMPTY,
  SIGNUP_NAME_EMPTY,
  ID_EMPTY,
  ADDRESS_EMPTY,
  PHONENUMBER_EMPTY,
  ID_LENGTH_ERROR,
  PASSWORD_LENGTH_ERROR,
  SIGN_UP_CEO_NAME,
} from '../../../config/baseResponseStatus.js';
import dotenv from 'dotenv';
dotenv.config();

class userController {
  /**
   * API No. 1
   * API Name : 사용자 회원가입  API
   * [POST] /app/users
   */
  //   userId: Nickname,
  //   password: Password,
  //   address: Address,
  //   detailAddress: DetailAddress,
  //   name: Name,
  //   ceoName: CEOName,
  //   phoneNumber: PhoneNumber,
  //   distinction: props.name, -- type
  //   info: Info,
  postUser = async function (req, res) {
    const parsedType = parseInt(req.body.type); // 회원 구분
    // type 1. 사용자, 2.조직/기관
    if (parsedType === 1) {
      // 사용자 회원가입
      // 사용자 테이블에 정보 입력
      const userId = req.body.id;
      const password = req.body.password;
      const userName = req.body.name;
      const phoneNumber = req.body.phoneNumber;
      const address = req.body.address;
      const type = parsedType;
      const info = req.body.info;

      if (!userId) return res.send(NICKNAME_EMPTY); // code 2000
      if (userId.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
      if (!password) return res.send(PASSWORD_EMPTY); // code 2001
      if (password.length < 6 || password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013
      if (!userName) return res.send(SIGNUP_NAME_EMPTY); // code 2005
      if (!address) return res.send(ADDRESS_EMPTY); // code 2010
      if (!phoneNumber) return res.send(PHONENUMBER_EMPTY); //code 2011

      const signUpResponse = await createUser(userId, password, userName, phoneNumber, address, type, info);
      return res.send(signUpResponse);
    }
    // 그 이외의 경우 기업
    const organizationId = req.body.id;
    const password = req.body.password;
    const address = req.body.address;
    const detailAddress = req.body.detailAddress;
    const organizationName = req.body.name;
    const managerName = req.body.ceoName; // req.body.managerName
    const phoneNumber = req.body.phoneNumber;
    const type = req.body.type;
    const info = req.body.info;

    if (!organizationId) return res.send(NICKNAME_EMPTY); // code 2000
    if (organizationId.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
    if (!password) return res.send(PASSWORD_EMPTY); // code 2001
    if (password.length < 6 || password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013
    if (!organizationName) return res.send(SIGNUP_NAME_EMPTY); // code 2005
    if (!managerName) return res.send(SIGN_UP_CEO_NAME); // code 2011
    if (!address) return res.send(ADDRESS_EMPTY); // code 2010
    if (!phoneNumber) return res.send(PHONENUMBER_EMPTY); //code 2011

    const signUpResponse = await createOrganizationUser(
      organizationId,
      password,
      address,
      detailAddress,
      organizationName,
      managerName,
      phoneNumber,
      type,
      info,
    );
    return res.send(signUpResponse);
  };

  /**
   *  API No. 2
   *  API Name : 사용자 로그인 API
   * [POST] /app/users/login
   */
  // type 1: 사용자, 2: 조직/기관
  login = async function (req, res) {
    const type = parseInt(req.body.type);
    if (type === 1) {
      // 사용자 로그인
      const userId = req.body.id;
      const password = req.body.password;

      if (!userId) return res.send(NICKNAME_EMPTY); // code 2009
      if (userId.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
      if (!password) return res.send(PASSWORD_EMPTY); // code 2003
      if (password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013

      const loginResult = await userLogin(userId, password, type);
      res.cookie('refreshToken', loginResult.refreshToken, {
        httpOnly: true,
        maxAge: 3000000,
      });
      return res.send(loginResult);
    }
    // 조직/기관 로그인
    const organizationId = req.body.id;
    const password = req.body.password;

    if (!organizationId) return res.send(NICKNAME_EMPTY); // code 2009
    if (organizationId.length > 20) return res.send(ID_LENGTH_ERROR); // code 2012
    if (!password) return res.send(PASSWORD_EMPTY); // code 2003
    if (password.length > 20) return res.send(PASSWORD_LENGTH_ERROR); // code 2013

    const loginResult = await organizationUserLogin(organizationId, password, type);
    res.cookie('refreshToken', loginResult.refreshToken, {
      httpOnly: true,
      maxAge: 3000000,
    });
    return res.send(loginResult);
  };
  /**
   *  API No. 4
   *  API Name : 사용자 프로필 API
   * [GET`] /app/users/profile/:userId
   */
  getProfile = async function (req, res) {
    const userId = req.params;
    console.log(userId);
    const profileResult = await retrieveUserProfile(userId);
    return res.send(profileResult);
  };
}
export default new userController();
