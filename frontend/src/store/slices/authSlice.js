import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load state from local storage', err);
    return initialState;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch (err) {
    console.error('Failed to save state to local storage', err);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadFromLocalStorage(),
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveToLocalStorage(state);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      saveToLocalStorage(state);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
