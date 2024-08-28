import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: "https://sketchfab.com/models/1762162e14a445d4bd2a40db53f796ba/embed", 
};

const urlSlice = createSlice({
  name: "routesUrl",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    resetUrl: (state) => {
      state.url = "https://sketchfab.com/models/1762162e14a445d4bd2a40db53f796ba/embed"; 
    },
  },
});

export const { setUrl, resetUrl } = urlSlice.actions;
export default urlSlice.reducer;
