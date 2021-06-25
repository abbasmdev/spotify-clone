import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: null,
    token_type: null,
    expires_in: null,
  },
  reducers: {
    setLoginData(state, action) {
      state.access_token = action.payload.access_token;
      state.token_type = action.payload.token_type;
      state.expires_in = action.payload.expires_in;
    },
    clearLoginData(state) {
      state.access_token = null;
      state.token_type = null;
      state.expires_in = null;
    },
  },
});

export const selectAuthAccessToken = (state) => state.auth.access_token;
export const authActions = authSlice.actions;

export default authSlice.reducer;
