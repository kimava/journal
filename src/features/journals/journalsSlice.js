import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { firebaseApp } from '../../service/firebase';

const db = getDatabase(firebaseApp);

const postsAdapter = createEntityAdapter({
  selectId: (journal) => journal.id,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

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
    return post;
  } catch (error) {
    console.log(error);
  }
});

export const deleteJournal = createAsyncThunk(
  `journals/deleteJournal`,
  (post) => {
    remove(ref(db, `users/${post.userId}/journals/${post.journalId}`));
    return post.journalId;
  }
);

export const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    journalAdded(state, action) {
      if (action.payload) {
        postsAdapter.upsertMany(state, action.payload);
      }
    },
    journalUpdated(state, action) {
      const { id, title, content, mood } = action.payload;
      const existingJournal = state.entities[id];
      if (existingJournal) {
        existingJournal.title = title;
        existingJournal.content = content;
        existingJournal.mood = mood;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(saveJournal.fulfilled, postsAdapter.addOne)
      .addCase(deleteJournal.fulfilled, postsAdapter.removeOne);
  },
});

export const { journalAdded, journalUpdated } = journalsSlice.actions;

export default journalsSlice.reducer;

export const { selectAll, selectById, selectIds } = postsAdapter.getSelectors(
  (state) => state.journals
);
