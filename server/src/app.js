import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { API } from './constants.js';
import { verifyAuth } from './middlewares/auth.middleware.js';

const app = express();

app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
//enable cookie-parser
app.use(cookieParser());

app.use(`${API}/users`, userRoutes);

app.use(errorHandler);

export default app;
