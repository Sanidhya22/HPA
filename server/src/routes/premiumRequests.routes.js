import express from 'express';
import {
  acceptRequest,
  declineRequest,
  submitRequest,
} from '../controllers/premiumRequest.controllers.js';
import { verifyAdminAuth } from '../middlewares/admin.auth.middleware.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/submit-request').post(verifyAuth, submitRequest);
router.route('/accept-request/:id').patch(verifyAdminAuth, acceptRequest);
router.route('/decline-request/:id').patch(verifyAdminAuth, declineRequest);

export default router;
