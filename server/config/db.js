import mongoose from 'mongoose';

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.on('connected', () => {
    console.log('MONGODB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.log('MONGODB ERROR: ', error);
  });
};

export default connect;
