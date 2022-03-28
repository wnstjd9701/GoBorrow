import { Router } from 'express';
const router = Router();

import { authentication, reissuanceToken } from '../../config/jwtMiddleware.js';

//refreshToken을 유효성 확인 후 accessToken 재발급해서 넘겨주면 됨!
router.post('/token', reissuanceToken);

export default router;
