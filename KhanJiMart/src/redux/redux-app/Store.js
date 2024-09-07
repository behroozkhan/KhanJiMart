import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../redux-features/auth/AuthSlice";

export const store = configureStore({
    reducer: {
      auth: AuthSlice,
    },
  });