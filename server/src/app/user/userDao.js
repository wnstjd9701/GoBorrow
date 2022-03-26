export async function selectUserId(connection, id) {
  const getUserId = `
    SELECT id FROM User WHERE id = ?
    `;
  const [userIdResult] = await connection.query(getUserId, id);
  return userIdResult;
}
export async function selectOrganizationId(connection, id) {
  const getOrganizationId = `
  SELECT id FROM Organization WHERE id = ?
  `;
  const [organizationResult] = await connection.query(getOrganizationId, id);
  return organizationResult;
}
export async function confirmOrganizationInfo(connection, params) {
  const confirmOrganization = `
  SELECT exists (SELECT id FROM Organization WHERE id=? and password=? and isDeleted=0) as exist;
  `;
  const [orgResult] = await connection.query(confirmOrganization, params);
  return orgResult;
}
export async function confirmUserInfo(connection, params) {
  const confirmUser = `
  SELECT exists (SELECT id FROM User WHERE id=? and password=? and isDeleted=0) as exist;
  `;
  const [userResult] = await connection.query(confirmUser, params);
  return userResult;
}
export async function createUserAccount(connection, params) {
  const insertUserInfo = `
  INSERT INTO User(id, password, name, address) VALUES (?, ?, ?, ?, ?)
  `;
  const [userIdResult] = await connection.query(insertUserInfo, params);
  return userIdResult;
}
