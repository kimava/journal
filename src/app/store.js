import { configureStore } from '@reduxjs/toolkit';
import journalsReducer from '../features/journals/journalsSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    journals: journalsReducer,
    user: userReducer,
  },
});
