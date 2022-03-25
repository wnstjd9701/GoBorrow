export async function checkUserId(connection, id) {
  const getUserId = `
    SELECT id FROM User WHERE id = ?
    `;
  const [userIdResult] = await connection.query(getUserId, id);
  return userIdResult;
}

export async function createUserAccount(connection, id) {}
