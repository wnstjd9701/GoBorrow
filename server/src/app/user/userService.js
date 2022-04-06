import { createUserAccount, createOrganizationUserAccount, getUserInfo } from './userDao.js';
import { userIdCheck, organizationIdCheck } from './userProvider.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS, FAIL, LOGIN_FAILURE, PASSWORD_WRONG, SIGNUP_SUCCESS } from '../../../config/baseResponseStatus.js';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import dotenv from 'dotenv';

dotenv.config('../../../.env');
// Create, Update, Delete

export async function createUser(userId, password, userName, phoneNumber, address, type, info) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdCheckResult = await userIdCheck(userId);
    if (userIdCheckResult.length > 0) return ID_ALREADY_EXISTS; // id가 이미 존재할 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [userId, hashedPassword, userName, phoneNumber, address, type, info];
    const createUserIdResult = await createUserAccount(connection, params);
    console.log(`추가된 일반 사용자 Idx: ${createUserIdResult[0].insertId}, ID: ${userId}`);
    connection.release();
    return SIGNUP_SUCCESS;
  } catch (err) {
    console.log(err);
    return SERVER_CONNECT_ERROR;
  }
}

export async function createOrganizationUser(
  organizationId,
  password,
  address,
  detailAddress,
  organizationName,
  managerName,
  phoneNumber,
  type,
  info,
) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationIdCheckResult = await organizationIdCheck(organizationId);
    if (organizationIdCheckResult.length > 0) return ID_ALREADY_EXISTS; // id 가 이미 존재할 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [organizationId, hashedPassword, address, detailAddress, organizationName, managerName, phoneNumber, type, info];
    const organizationUserIdResult = await createOrganizationUserAccount(connection, params);
    console.log(`추가된 조직/기관 사용자 Idx: ${organizationUserIdResult[0].insertId}, ID: ${organizationId}`);

    return SIGNUP_SUCCESS;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}

export async function userLogin(id, password, type) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdCheckResult = await userIdCheck(id);
    if (userIdCheckResult.length < 1) return LOGIN_FAILURE; // code 1002 아이디가 존재 하지 않을 경우

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword];
    const checkResult = await getUserInfo(connection, params);

    if (checkResult.length >= 1) {
      // DB에서 비교후에 id가 존재할 경우
      const accessToken = jwt.sign({ id: id, userType: type }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ id: id, userType: type }, process.env.JWT_SECRET, { expiresIn: '14 days' });
      return {
        message: SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } else {
      return PASSWORD_WRONG;
    }
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}

export async function organizationUserLogin(organizationId, password, type) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const organizationUserIdCheck = await organizationIdCheck(organizationId);
    if (organizationUserIdCheck.length < 1) return LOGIN_FAILURE;

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [id, hashedPassword];
    const checkResult = await getOrganizationUserInfo(connection, params);

    if (checkResult.length >= 1) {
      const accessToken = jwt.sign({ id: organizationId, userType: type }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ id: organizationId, userType: type }, process.env.JWT_SECRET, { expiresIn: '14 days' });
      return {
        message: SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } else {
      return PASSWORD_WRONG;
    }
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
}
