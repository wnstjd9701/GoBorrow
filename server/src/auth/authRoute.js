import { Router } from 'express';
const router = Router();

import { authentication, reissuanceAccessToken, reissuanceToken } from '../../config/jwtMiddleware.js';

router.get('/token', reissuanceAccessToken);

export default router;
