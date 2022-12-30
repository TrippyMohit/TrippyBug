import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authState: false,
  userName: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.authState = true;
    },
    userLoggedOut: (state, action) => {
      state.authState = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
