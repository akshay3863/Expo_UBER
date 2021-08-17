import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./Redux/NavSlice";

export const Store = configureStore({
  reducer: {
    nav: NavSlice,
  },
});
