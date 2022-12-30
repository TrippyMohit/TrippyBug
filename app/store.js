import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../slices/authenticationSlice";
import userInfo from "../slices/userInfoSlice";
export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userInfo: userInfo,
  },
});
