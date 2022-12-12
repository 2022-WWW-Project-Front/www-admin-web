import { configureStore } from '@reduxjs/toolkit'
import step1 from './step1Slice'
import step2 from './step2Slice'
import step3 from './step3Slice'

const store = configureStore({
  reducer: {
    step1: step1.reducer,
    step2: step2.reducer,
    step3: step3.reducer
  }
})

export default store
