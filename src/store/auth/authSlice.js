import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setAuthAndStoreLoginData = createAsyncThunk(
  "auth/setAuthAndStoreLoginData",
  async ({ access_token, token_type, expires_in }) => {
    const data = { access_token, token_type, expires_in };
    localStorage.setItem("auth", JSON.stringify(data));
    return data;
  }
);

export const getAuthLoginDataFromStorage = createAsyncThunk(
  "auth/getAuthLoginDataFromStorage",
  async () => {
    const strData = localStorage.getItem("auth");
    const data = JSON.parse(strData);
    if (!data) {
      throw new Error("no auth");
    }
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(setAuthAndStoreLoginData.fulfilled, (state, action) => {
      authSlice.caseReducers.setLoginData(state, action);
    });
    builder.addCase(getAuthLoginDataFromStorage.fulfilled, (state, action) => {
      authSlice.caseReducers.setLoginData(state, action);
    });
  },
});

export const selectAuthAccessToken = (state) => state.auth.access_token;
export const authActions = authSlice.actions;

export default authSlice.reducer;
