import { checkUserId, createUserAccount } from './userDao.js';
import { pool } from '../../../config/database.js';
import { ID_ALREADY_EXISTS, SUCCESS } from '../../../config/baseResponseStatus.js';

import { createHash } from 'crypto';

export async function createUser(distinction, id, password, name, address) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const checkUserAcoount = checkUserId(connection, id);
    if (checkUserAcoount.length >= 1) return ID_ALREADY_EXISTS;

    const hashedPassword = createHash('sha512').update(password).digest('hex');
    const params = [distinction, id, hashedPassword, name, address];

    const signUpResult = await createUserAccount(connection, params);
    return SUCCESS;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
  } finally {
    connection.release();
  }
}
