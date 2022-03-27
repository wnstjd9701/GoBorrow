import { Router } from 'express';
const router = Router();

import { authentication, reissuanceToken } from '../../config/jwtMiddleware.js';

//refreshToken을 유효성 확인 후 accessToken 재발급해서 넘겨주면 됨!
router.post('/accessToken', function (req, res) {
  const refreshToken = req.cookies.refreshToken;
  const accessToken = ''; //accessToken 새로 할당 받아서 넘겨줘엽!
  return res.json({ accessToken: accessToken });
});

export default router;
