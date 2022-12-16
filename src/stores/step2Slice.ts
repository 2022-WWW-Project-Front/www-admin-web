import { createSlice } from '@reduxjs/toolkit'

interface step2 {
  profile: []
  bio: string
  description: string
}

const initialState: step2 = {
  profile: [],
  bio: '',
  description: ''
}

const step2Slice = createSlice({
  name: 'step2Slice',
  initialState,
  reducers: {
    step2: (state, action) => {
      state.profile = action.payload.profile
      state.bio = action.payload.bio
      state.description = action.payload.description
    },
    reset: (state) => {
      state = {
        profile: [],
        bio: '',
        description: ''
      }
    }
  }
})

export default step2Slice

export const { step2, reset } = step2Slice.actions
