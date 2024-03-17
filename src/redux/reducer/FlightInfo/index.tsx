import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
  }

export const FlightInfoSlice = createSlice({
  name: 'FlightInfo',
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { updateList } = FlightInfoSlice.actions

export default FlightInfoSlice.reducer