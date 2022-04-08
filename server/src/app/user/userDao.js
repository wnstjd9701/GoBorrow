// id -> userId
export async function selectUserId(connection, userId) {
  const getUserId = `
    SELECT id FROM User WHERE id = ?
    `;
  const [userIdResult] = await connection.query(getUserId, userId);
  return userIdResult;
}

export async function selectOrganizationId(connection, organizationId) {
  const getOrganizationUser = `
  SELECT id FROM Organization WHERE id = ?
  `;
  const [organizationIdResult] = await connection.query(getOrganizationUser, organizationId);
  return organizationIdResult;
}

export async function getUserInfo(connection, params) {
  const getUserInformation = `
  SELECT id, distinction FROM User WHERE id = ? and password = ?
  `;
  const [userInfoResult] = await connection.query(getUserInformation, params);
  return userInfoResult;
}

export async function getOrganizationUserInfo(connection, params) {
  const getOrganizationInformation = `
  SELECT   
  `;
  const [organizationInfoResult] = await connection.query(getOrganizationInformation, params);
  return organizationInfoResult;
}

export async function createUserAccount(connection, params) {
  const insertUserInfo = `
  INSERT INTO User (id, password, userName, phoneNumber, address, distinction, info)
  VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
  const userIdResult = await connection.query(insertUserInfo, params);
  return userIdResult;
}

export async function createOrganizationUserAccount(connection, params) {
  const insertOrganizationUserInfo = `
  INSERT INTO Organization (id, password, address, detailAddress, organizationName, managerName, phoneNumber, type, info)
  VALUES (?,?,?,?,?,?,?,?,?)`;
  const organizationIdResult = await connection.query(insertOrganizationUserInfo, params);
  return organizationIdResult;
}

export async function checkPasswordByUserId(connection, params) {
  const getUserPassword = `
          SELECT exists (SELECT id FROM User WHERE id=? and password=? and isDeleted=0) as exist;
          `;
  const [userPasswordRows] = await connection.query(getUserPassword, params);
  return userPasswordRows;
}

export async function selectUserProfile(connection, userId) {
  const getUserProfile = `
  SELECT * FROM User WHERE userId = ?
  `;
  const userProfileResult = await connection.query(getUserProfile, userId);
  return userProfileResult;
}
