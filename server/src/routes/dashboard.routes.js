import express from 'express';
import {
  getDashboardData,
  updateDashboardData,
} from '../controllers/dashboard.controllers.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/getdata').get(verifyAuth, getDashboardData);
router.route('/updatedata').put(verifyAuth, updateDashboardData);

export default router;
