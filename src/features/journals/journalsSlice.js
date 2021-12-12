import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'First Journal',
    content: 'Yes!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    mood: 'soso',
  },
  {
    id: '2',
    title: 'Second Journal',
    content: 'Hello',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    mood: 'soso',
  },
];

const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    journalAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { journalAdded, moodAdded } = journalsSlice.actions;

export default journalsSlice.reducer;
