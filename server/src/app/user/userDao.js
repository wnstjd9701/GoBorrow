export async function selectUserId(connection, id) {
  const getUserId = `
    SELECT id FROM User WHERE id = ?
    `;
  const [userIdResult] = await connection.query(getUserId, id);
  return userIdResult;
}

export async function createUserAccount(connection, params) {
  const insertUserInfo = `
  INSERT INTO User(distinction, id, password, name, address) VALUES (?, ?, ?, ?, ?)
  `;
  const [userIdResult] = await connection.query(insertUserInfo, params);
  return userIdResult;
}
