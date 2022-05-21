import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  id: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action) => {
      const { id } = action.payload;
      state.show = true;
      state.id = id;
    },

    close: (state) => {
      state.show = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
