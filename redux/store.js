import { configureStore } from "@reduxjs/toolkit";
import basket from "../redux/actions/basketSlice";
import user from "../redux/actions/userSlice";
export const store = configureStore({
  reducer: {
    basket,
    user,
  },
});