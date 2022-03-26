export async function selectUserId(connection, id) {
  const getUserId = `
    SELECT id FROM User WHERE id = ?
    `;
  const [userIdResult] = await connection.query(getUserId, id);
  return userIdResult;
}
export async function getUserInfo(connection, params) {
  const getUserInformation = `
  SELECT id, distinction FROM User WHERE id = ? and password = ?
  `;
  const [userInfoResult] = await connection.query(getUserInformation, params);
  return userInfoResult;
}
export async function createUserAccount(connection, params) {
  const insertUserInfo = `
  INSERT INTO User (id, password, userName, phoneNumber, address, info, distinction) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [userIdResult] = await connection.query(insertUserInfo, params);
  return userIdResult;
}
export async function checkPasswordByUserId(connection, params) {
  const getUserPassword = `
          SELECT exists (SELECT id FROM User WHERE id=? and password=? and isDeleted=0) as exist;
          `;
  const [userPasswordRows] = await connection.query(getUserPassword, params);
  return userPasswordRows;
}
