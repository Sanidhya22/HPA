import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { API } from './constants.js';

const app = express();

app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
//enable cookie-parser
app.use(cookieParser());

app.use(`${API}/auth`, authRoutes);

app.use(`${API}/dashboard`, dashboardRoutes);

app.use(errorHandler, dashboardRoutes);

export default app;
