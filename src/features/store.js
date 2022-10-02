import { configureStore } from '@reduxjs/toolkit'
import coreReducer from '../features/coreSlice'

export const store = configureStore({
  reducer: {
    core: coreReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})