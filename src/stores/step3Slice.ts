import { createSlice } from '@reduxjs/toolkit'

interface step3 {
  workName: string
  workExplain: string
}

const initialState: step3 = {
  workName: '',
  workExplain: ''
}

const step3Slice = createSlice({
  name: 'step3Slice',
  initialState,
  reducers: {
    step3: (state, action) => {
      state.workName = action.payload.workName
      state.workExplain = action.payload.workExplain
    },
    reset: (state) => {
      state = {
        workName: '',
        workExplain: ''
      }
    }
  }
})

export default step3Slice

export const { step3, reset } = step3Slice.actions
