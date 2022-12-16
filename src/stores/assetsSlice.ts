import { createSlice } from '@reduxjs/toolkit'

interface assets {
  assets: string[]
}

const initialState: assets = {
  assets: []
}

const assetsSlice = createSlice({
  name: 'assetsSlice',
  initialState,
  reducers: {
    assets: (state, action) => {
      state.assets = action.payload.assets
    }
  }
})

export default assetsSlice

export const { assets } = assetsSlice.actions
