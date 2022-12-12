import { createSlice } from '@reduxjs/toolkit'

interface step3 {
  assets: string[]
  workName: string
  workExplain: string
}

const initialState: step3 = {
  assets: [],
  workName: '',
  workExplain: ''
}

const step3Slice = createSlice({
  name: 'step3Slice',
  initialState,
  reducers: {
    step3: (state, action) => {
      state.assets = action.payload.assets
      state.workName = action.payload.workName
      state.workExplain = action.payload.workExplain
    },
    reset: (state) => {
      state = {
        assets: [],
        workName: '',
        workExplain: ''
      }
    }
  }
})

export default step3Slice

export const { step3, reset } = step3Slice.actions
