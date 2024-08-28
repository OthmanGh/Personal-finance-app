import { configureStore } from '@reduxjs/toolkit';
import { authSlice as authReducer } from '../constants';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
