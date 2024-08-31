import express from 'express';
import authRoute from './routes/auth.routes.js';
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  })
);

app.use('/api/v1', authRoute);

export default app;
