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
    journalUpdated(state, action) {
      const { id, title, content, mood } = action.payload;
      const existingJournal = state.find((journal) => journal.id === id);
      if (existingJournal) {
        existingJournal.title = title;
        existingJournal.content = content;
        existingJournal.mood = mood;
      }
    },
    journalDeleted(state, action) {
      const { id } = action.payload;
      return state.filter((journal) => journal.id !== id);
    },
  },
});

export const { journalAdded, journalUpdated, journalDeleted, moodAdded } =
  journalsSlice.actions;

export default journalsSlice.reducer;
