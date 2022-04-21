// id -> userId
export async function selectUserId(connection, userId) {
  const getUserId = `
    SELECT userId FROM User WHERE userId = ?
    `;
  const [userIdResult] = await connection.query(getUserId, userId);
  return userIdResult;
}

export async function selectOrganizationId(connection, organizationId) {
  const getOrganizationUser = `
  SELECT organizationId FROM Organization WHERE organizationId = ?
  `;
  const [organizationIdResult] = await connection.query(getOrganizationUser, organizationId);
  return organizationIdResult;
}

export async function getUserInfo(connection, params) {
  const getUserInformation = `
  SELECT userId, type FROM User WHERE userId = ? and password = ?
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
  INSERT INTO User (userId, password, userName, phoneNumber, address, type, info)
  VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
  const userIdResult = await connection.query(insertUserInfo, params);
  return userIdResult;
}

export async function createOrganizationUserAccount(connection, params) {
  const insertOrganizationUserInfo = `
  INSERT INTO Organization (organizationId, password, address, detailAddress, organizationName, managerName, phoneNumber, type, info)
  VALUES (?,?,?,?,?,?,?,?,?)`;
  const organizationIdResult = await connection.query(insertOrganizationUserInfo, params);
  return organizationIdResult;
}

export async function checkPasswordByUserId(connection, params) {
  const getUserPassword = `
          SELECT exists (SELECT userId FROM User WHERE userId=? and password=? and isDeleted=1) as exist;
          `;
  const [userPasswordRows] = await connection.query(getUserPassword, params);
  return userPasswordRows;
}

export async function selectUserProfile(connection, userId) {
  const getUserProfile = `
  SELECT userId, userName, phoneNumber, address, type, info FROM User WHERE userId = ?
  `;
  const [userProfileResult] = await connection.query(getUserProfile, userId);
  return userProfileResult;
}

export async function updateUserProfileInfo(connection, params) {
  const updateProfile = `
  UPDATE User
  SET 
    userName    = ?,
    phoneNumber = ?,
    address     = ?,
    info        = ?
  WHERE userId = ?;
  `;
  const [updateUserProfileResult] = await connection.query(updateProfile, params);
  return updateUserProfileResult;
}

export async function selectUserRentList(connection, userId) {
  const getUserRentLists = `
  SELECT u.userName         사용자이름,
       r.rentStatus as    대여상태,
       o.organizationName 조직이름,
       p.productId        제품번호,
       p.productName      제품이름,
       i.itemId           제품상세번호,
       i.itemName         제품상세이름,
       r.startDate        대여시작일,
       r.endDate          대여반납일,
       r.startTime        대여시작시간,
       r.endTime          대여반납시간,
       r.statusReason     상태변경,
       r.returnDate       반납일시,
       r.returnInfo       반납관련비고
  FROM Product p,
      Rent r,
      User u,
      Organization o,
      Item i
  WHERE p.productId = i.productId
     and p.organizationId = o.organizationId
     and u.userId = r.userId
     and o.organizationId = r.organizationId
     and u.userId = ?
   ORDER BY r.rentStatus`;
  const [getUserRentListResult] = await connection.query(getUserRentLists, userId);
  return getUserRentListResult;
}
