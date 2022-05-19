import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  off,
  orderByChild,
  orderByValue,
} from 'firebase/database';
import { firebaseApp } from '../../service/firebase';

const db = getDatabase(firebaseApp);

const initialState = { posts: {}, status: 'idle', error: null };

export const fetchJournals = (userId) => {
  return (dispatch) => {
    const query = ref(db, `users/${userId}/journals`);
    onValue(query, (snapshot) => {
      const result = snapshot.val();
      dispatch(journalAdded(result));
    });
  };
};

export const saveJournal = createAsyncThunk('journals/saveJournal', (post) => {
  try {
    set(ref(db, `users/${post.userId}/journals/${post.id}`), post);
  } catch (error) {
    console.log(error);
  }
});

export const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    journalAdded(state, action) {
      state.posts = action.payload;
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
  extraReducers(builder) {
    builder.addCase(saveJournal.fulfilled, (state, action) => {
      state.status = 'idle';
    });
  },
});

export const { journalAdded, journalUpdated, journalDeleted, moodAdded } =
  journalsSlice.actions;

export const selectAllJournals = (state) => state.journals.posts;

export default journalsSlice.reducer;
