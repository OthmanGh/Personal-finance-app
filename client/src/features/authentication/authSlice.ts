import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: localStorage.getItem('ACCESS_TOKEN') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;

      if (action.payload) {
        localStorage.setItem('ACCESS_TOKEN', action.payload);
      } else {
        localStorage.removeItem('ACCESS_TOKEN');
      }
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
