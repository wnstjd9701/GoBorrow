import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {
  TOKEN_EMPTY,
  TOKEN_VERIFICATION_FAILURE,
  TOKEN_VERIFICATION_SUCCESS,
  ACCESS_TOKEN_VERIFICATION_FAILURE,
  TOKEN_EXPIRED,
  TOKEN_IS_VALID,
} from './baseResponseStatus.js';
dotenv.config();
import jwtAuthorization from './jwtAuth.js';

/**
 * Headers:
 * key             Value
 * Authorization - Bearer accesstoken
 *
 * AccessToken 검증 미들웨어
 * AccessToken이 유효하면 next()
 */
export const authentication = (req, res, next) => {
  let authHeader = req.headers['authorization'];
  const token = authHeader && req.headers.authorization.split('Bearer ')[1];
  if (!token) return res.send(TOKEN_EMPTY);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.send({
        isSuccess: false,
        errorName: err.name,
        errMessage: err.message,
      });

    req.id = user.id;
    req.distinction = user.distinction;
    next();
  });
};

/**
 *  API No. 3
 *  API Name : 토큰 재발급 API
 * [POST] /auth/token
 */
export const reissuanceToken = (req, res) => {
  // access token 과 refresh token의 존재 유무 확인
  if (req.headers.authorization && req.headers.refreshtoken) {
    const accessToken = req.headers.authorization.split('Bearer ')[1]; // accessToken
    const refreshToken = req.headers.refreshtoken;

    // accessToken 검증 -> expired
    const authResult = jwtAuthorization.verify(accessToken);

    // accessToken 디코딩하여 user의 정보를 가져오기
    const decoded = jwt.decode(accessToken);
    if (decoded === null) {
      // accessToken의 토큰 검증 값이 잘못된 경우
      return res.send(authResult); // code 5002
    }

    // accessToken의  decoding된 값에서 사용자의 id를 가져와 refreshToken을 검증
    const decodedRefreshToken = jwt.decode(refreshToken);
    const refreshResult = jwtAuthorization.refreshVerify(refreshToken, decoded);
    if (decodedRefreshToken === null) {
      // refreshToken의 토큰 검증 값이 잘못된 경우
      return res.send(refreshResult); // code 5003
    }

    // 재발급을 위해서는 accessToken이 만료되어야 함
    if (authResult.isSuccess === false && authResult.message === 'jwt expired') {
      // 1. access token이 만료되고, refresh token도 만료 된 경우 => 새로 로그인
      if (refreshResult.isSuccess === false && refreshResult.message === 'jwt expired') {
        return res.send(TOKEN_EXPIRED); // cide 3002
      } else {
        // 2. access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access toekn을 발급
        const newAccessToken = jwtAuthorization.sign(decoded);
        // res.cookie('accessToken', newAccessToken);
        // req.cookies.accessToken = newAccessToken;
        return res.send({
          isSuccess: true,
          code: 5000,
          message: 'AccessToken 재발급',
          token: {
            accessToken: newAccessToken,
            refreshToken: refreshToken,
          },
        });
      }
    } else {
      // 3. access token 유효 , refresh token 만료
      if (refreshResult.isSuccess === false && refreshResult.message === 'jwt expired') {
        const newRefreshToken = jwtAuthorization.refresh(decoded);
        // res.cookie('refreshToken', newRefreshToken);
        // req.cookies.refreshToken = newRefreshToken;
        return res.send({
          isSuccess: true,
          code: 5001,
          message: 'RefreshToken 재발급',
          token: {
            accessToken: accessToken,
            refreshResult: newRefreshToken,
          },
        });
      }
      // 4. 토큰이 모두 유효 => 재발급 할 필요가 없음
      return res.send(TOKEN_IS_VALID);
    }
  } else {
    // access token 또는 refresh token이 헤더에 없는 경우
    res.send(TOKEN_EMPTY);
  }
};
