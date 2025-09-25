import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null, // will store id, fullName, email, phone, role
  token: null, // JWT token
  refreshToken: null, // refresh token
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, fullName, email, phone, role, token, refreshToken } =
        action.payload;
      state.userInfo = { id, fullName, email, phone, role };
      state.token = token;
      state.refreshToken = refreshToken;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
