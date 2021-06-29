import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import playerReducer from "./player/playerSlice";

export const store = configureStore({
  reducer: { auth: authReducer, user: userReducer, player: playerReducer },
});
