import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebaseApp } from '../../service/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const onAuthChange = (onUserChange) => {
  onAuthStateChanged(firebaseAuth, (user) => {
    onUserChange(user?.uid);
  });
};

export const createUser = createAsyncThunk('user/createUser', async (form) => {
  try {
    const { email, password } = form;
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    alert('created successfully!');
  } catch (error) {
    alert(`please check your email account again`);
  }
});

export const emailLogin = createAsyncThunk('user/emailLogin', async (form) => {
  const { email, password } = form;
  try {
    const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return res.user.uid;
  } catch (error) {
    alert('incorrect email or password');
  }
});

export const providerLogin = createAsyncThunk(
  'user/providerLogin',
  async (providerName) => {
    const provider = getProvider(providerName);
    try {
      const res = await signInWithPopup(firebaseAuth, provider);
      return res.user.uid;
    } catch (error) {
      console.log(error);
    }
  }
);

function getProvider(name) {
  const providerName = name.includes('google')
    ? 'google'
    : name.includes('twitter')
    ? 'twitter'
    : 'unknown';
  switch (providerName) {
    case 'google':
      return googleProvider;
    case 'twitter':
      return twitterProvider;
    default:
      throw new Error(`unknown provider: ${name}`);
  }
}

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (email) => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      alert('Reset email has been sent!');
    } catch (error) {
      alert('please check your account again');
      console.log(error.message);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await firebaseAuth.signOut();
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  userId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSet(state, action) {
      state.userId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(emailLogin.fulfilled, (state, action) => {
        state.userId = action.payload;
      })
      .addCase(providerLogin.fulfilled, (state, action) => {
        state.userId = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userId = null;
      });
  },
});

export const { userSet } = userSlice.actions;

export const selectUserId = (state) => state.user.userId;

export default userSlice.reducer;
