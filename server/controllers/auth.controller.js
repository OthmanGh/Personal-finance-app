import User from '../models/user.model.js';
import { signToken } from '../utils/helpers.js';

export const signup = async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const token = signToken(user._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        status: 'fail',
        message: 'Email already exists. Please use a different email or login.',
      });
    }

    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const login = (req, res) => {
  res.status(200).json({
    messaege: 'Hello from login',
  });
};
