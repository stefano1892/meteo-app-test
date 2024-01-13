import { configureStore } from '@reduxjs/toolkit'
import weaterReducer from './weatherSlice'
import degreeReducer from './degreeSlice'

export const store = configureStore({
  reducer: {
    pastResearch: weaterReducer,
    degreeSelection: degreeReducer
  },
})