import { Router } from 'express';
const router = Router();

import userController from './userController.js';

router.post('/signUp', userController.postUser);
router.post('/test', userController.test);
export default router;
