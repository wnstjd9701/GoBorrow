import { Router } from 'express';
const router = Router();

import organizationController from './organizationController.js';
router.get('/', organizationController.organizationInformation);
