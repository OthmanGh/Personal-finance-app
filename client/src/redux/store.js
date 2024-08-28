import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../constants';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
