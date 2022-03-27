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

// Access Token만 사용 시 -> Token 검증 미들웨어
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

/** 토큰 재발급 및 검증 미들웨어
 *  Headers
 * {
 *  "Authorization": 'Bearer accessToken',
 *  "refresh": 'refreshToken'
 *  }
 */
export const reissuanceToken = (req, res, next) => {
  // access token 과 refresh token의 존재 유무 확인
  if (req.headers.authorization && req.headers.refresh) {
    const accessToken = req.headers.authorization.split('Bearer ')[1]; // accessToken
    const refreshToken = req.headers.refresh;

    // accessToken 검증 -> expired
    const authResult = jwtAuthorization.verify(accessToken);

    // access token 디코딩하여 user의 정보를 가져오기
    const decoded = jwt.decode(accessToken);

    // accessToken has no authorization
    if (decoded === null) {
      res.send(ACCESS_TOKEN_VERIFICATION_FAILURE);
    }
    // accessToken의  decoding된 값에서 사용자의 id를 가져와 refreshToken을 검증
    const refreshResult = jwtAuthorization.refreshVerify(refreshToken, decoded);

    // 재발급을 위해서는 accessToken이 만료되어야 함
    if (authResult.isSuccess === false && authResult.message === 'jwt expired') {
      // 1. access token이 만료되고, refresh token도 만료 된 경우 => 새로 로그인
      if (refreshResult.isSuccess === false) {
        res.send(TOKEN_EXPIRED);
      } else {
        // 2. access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access toekn을 발급
        const newAccessToken = jwtAuthorization.sign(decoded);
        res.cookie('accessToken', newAccessToken);
        req.cookies.accessToken = newAccessToken;
        next();
        // res.send({
        //   isSuccess: true,
        //   token: {
        //     accessToken: newAccessToken,
        //     refreshToken: refreshToken,
        //   },
        // });
      }
    } else {
      // 3. access token 유효 , refresh token 만료
      if (refreshResult.isSuccess === false && refreshResult.message === 'jwt expired') {
        const newRefreshToken = jwtAuthorization.refresh(decoded);
        res.cookie('refreshToken', newRefreshToken);
        req.cookies.refreshToken = newRefreshToken;
        next();
      }
      // 4. 토큰이 모두 유효 => refresh 할 필요가 없음
      // res.send(TOKEN_IS_VALID);
      next();
    }
  } else {
    // access token 또는 refresh token이 헤더에 없는 경우
    res.send(TOKEN_EMPTY);
  }
};
