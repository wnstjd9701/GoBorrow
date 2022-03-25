import { Router } from 'express';
const router = Router();

import userController from './userController.js';

router.post('/signUp', userController.postUser);
router.get('/test', userController.test);
export default router;
