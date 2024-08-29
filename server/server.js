import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8000;

const server = () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
};

server();
