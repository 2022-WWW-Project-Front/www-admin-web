import { createSlice } from '@reduxjs/toolkit'

interface step1 {
  artistCode: string
}

const initialState: step1 = {
  artistCode: ''
}

const artistCodeSlice = createSlice({
  name: 'artistCodeSlice',
  initialState,
  reducers: {
    artistCode: (state, action) => {
      state.artistCode = action.payload.artistCode
    }
  }
})

export default artistCodeSlice

export const { artistCode } = artistCodeSlice.actions
