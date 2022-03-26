import { Router } from 'express';
import userRoute from '../src/app/user/userRoute.js';
const router = Router();

router.use('/app/users', userRoute);
// router.use('/app/product', require('./product'));

export default router;
