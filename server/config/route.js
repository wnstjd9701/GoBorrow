import { Router } from 'express';
import userRoute from '../src/app/user/userRoute.js';
import authRoute from '../src/auth/authRoute.js';
// import organizationRoute from '../src/app/organization/organizationRoute.js';

const router = Router();

router.use('/app/users', userRoute);
// router.use('/app/organization', organizationRoute);
router.use('/auth', authRoute);

export default router;
