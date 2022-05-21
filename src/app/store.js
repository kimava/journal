import { configureStore } from '@reduxjs/toolkit';
import journalsReducer from '../features/journals/journalsSlice';
import userReducer from '../features/users/userSlice';
import modalReducer from '../features/common/modalSlice';

export const store = configureStore({
  reducer: {
    journals: journalsReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
