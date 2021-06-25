import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    playLists: [],
  },
  reducers: {
    setPlayLists(state, action) {
      state.playLists = action.payload;
    },
  },
});

export const selectUserPlayLists = (state) => state.user.playLists;
export const userActions = userSlice.actions;

export default userSlice.reducer;
