import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connect from './config/db.js';

const PORT = process.env.PORT || 8000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      connect();
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
