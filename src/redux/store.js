import { configureStore } from '@reduxjs/toolkit'
import coreReducer from './coreSlice'

export const store = configureStore({
  reducer: {
    core: coreReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})