import { createSlice } from "@reduxjs/toolkit";

const loadDarkModeState = () => {
  const savedState = localStorage.getItem('darkMode');
  return savedState ? JSON.parse(savedState) : false;
};

const initialState = {
  darkMode: loadDarkModeState(),
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
