const userService = require('./userService');
const userProvider = require('./userProvider');
const baseResponse = require('../../../config/baseResponseStatus');

/**
 * API No. 1
 * API Name : 유저 생성 (회원가입) API
 * [POST] /app/users/signUp
 */
exports.postUser = async (req, res) => {
  const { distinction, id, password, verifiedPassword, name, address } = req.body;
  if (!id) return res.send(baseResponse.NICKNAME_EMPTY); // code 2000
  if (!password) return res.send(baseResponse.PASSWORD_EMPTY); // code 2001
  if (!verifiedPassword) return res.send(baseResponse.SIGNUP_VERIFIEDPASSWORD_EMPTY); // code 2004
  if (!name) return res.send(baseResponse.SIGNUP_NAME_EMPTY); // code 2005
  if (password != verifiedPassword) return res.send(baseResponse.PASSWORD_WRONG); // code 2003

  const signUpResponse = await userService.createUser(distinction, id, password, name, address);

  return res.send(signUpResponse);
};
