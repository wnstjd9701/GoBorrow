import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {
  TOKEN_EMPTY,
  TOKEN_VERIFICATION_FAILURE,
  TOKEN_VERIFICATION_SUCCESS,
  TOKEN_EXPIRED,
  TOKEN_IS_VALID,
} from './baseResponseStatus.js';
dotenv.config();
import jwtAuthorization from './jwtAuth.js';

export const productMiddleWare = (req, res, next) => {};
