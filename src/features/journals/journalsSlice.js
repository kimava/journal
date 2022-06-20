import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
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

export const deleteJournal = createAsyncThunk(
  `journals/deleteJournal`,
  (post) => {
    remove(ref(db, `users/${post.userId}/journals/${post.journalId}`));
  }
);

export const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    journalAdded(state, action) {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(saveJournal.fulfilled, (state, action) => {
      state.status = 'idle';
    });
  },
});

export const { journalAdded, journalDeleted, moodAdded } =
  journalsSlice.actions;

export const selectAllJournals = (state) => state.journals.posts;

export default journalsSlice.reducer;
