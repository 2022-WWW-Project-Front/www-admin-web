import { createSlice } from '@reduxjs/toolkit'

interface step1 {
  genre: string
  nickname: string
  email: string
  linkTree: string
}

const initialState: step1 = {
  genre: '',
  nickname: '',
  email: '',
  linkTree: ''
}

const step1Slice = createSlice({
  name: 'step1Slice',
  initialState,
  reducers: {
    step1: (state, action) => {
      state.genre = action.payload.genre
      state.nickname = action.payload.nickname
      state.email = action.payload.concat
      state.linkTree = action.payload.linkTree
    },
    reset: (state) => {
      state = {
        genre: '',
        nickname: '',
        email: '',
        linkTree: ''
      }
    }
  }
})

export default step1Slice

export const { step1, reset } = step1Slice.actions
