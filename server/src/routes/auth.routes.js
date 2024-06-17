import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import {
  handleUserSignIn,
  handleUserSignUp,
  handleUserSignOut,
} from '../controllers/auth.controllers.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';
import {
  handleGoogleUserSignIn,
  handleGoogleUserSignUp,
} from '../controllers/auth.google.controller.js';

const router = express.Router();

router.route('/signup').post(handleUserSignUp);
router.route('/signin').post(handleUserSignIn);
router.route('/signout').post(verifyAuth, handleUserSignOut);

router.route('/google/signin').post(handleGoogleUserSignIn);
router.route('/google/signup').post(handleGoogleUserSignUp);

export default router;
