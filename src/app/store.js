import { configureStore } from "@reduxjs/toolkit";
import journalsReducer from "../features/journals/journalsSlice";

export const store = configureStore({
  reducer: {
    journals: journalsReducer,
  },
});
