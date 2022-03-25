import { Router } from 'express';
import userRoute from '../src/app/user/userRoute.js';
const router = Router();

router.use('/api/user', userRoute);
// router.use('/api/product', require('./product'));

export default router;
