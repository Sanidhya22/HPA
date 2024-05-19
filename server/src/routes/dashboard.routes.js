import express from 'express';
import { getDashboardData } from '../controllers/dashboard.controllers.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/getdata').get(verifyAuth, getDashboardData);

export default router;
