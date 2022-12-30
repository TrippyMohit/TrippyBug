import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  userEmail: "",
  userImage: "",
};

export const userInfoSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      state.userImage = action.payload.image;
    },
  },
});

export const { userInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
