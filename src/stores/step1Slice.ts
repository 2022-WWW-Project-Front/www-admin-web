import { createSlice } from '@reduxjs/toolkit'

interface step1 {
  genre: string
  name: string
  concat: string
}

const initialState: step1 = {
  genre: '',
  name: '',
  concat: ''
}

const step1Slice = createSlice({
  name: 'step1Slice',
  initialState,
  reducers: {
    step1: (state, action) => {
      state.genre = action.payload.genre
      state.name = action.payload.name
      state.concat = action.payload.concat
    },
    reset: (state) => {
      state = {
        genre: '',
        name: '',
        concat: ''
      }
    }
  }
})

export default step1Slice

export const { step1, reset } = step1Slice.actions
