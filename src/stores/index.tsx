import { configureStore } from '@reduxjs/toolkit'
import { api } from '@api/api'
import artistCode from './artistCodeSlice'
import assets from './assetsSlice'
import step1 from './step1Slice'
import step2 from './step2Slice'
import step3 from './step3Slice'

const store = configureStore({
  reducer: {
    artistCode: artistCode.reducer,
    assets: assets.reducer,
    step1: step1.reducer,
    step2: step2.reducer,
    step3: step3.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store
