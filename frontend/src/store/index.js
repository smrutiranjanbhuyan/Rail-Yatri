import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from "./slices/loaderSlice"
import darkModeReducer from './slices/darkModeSlice'
import authReducer from "./slices/authSlice"
import urlSlice from './slices/urlSlice'
export const store = configureStore({
  reducer: {
    loader:loaderReducer,
    darkMode: darkModeReducer,
    auth:authReducer,
    routesUrl:urlSlice,
  },
})