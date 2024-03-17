import { configureStore } from '@reduxjs/toolkit'
import SearchSlice from '../reducer/Search'
import FlightInfoSlice from '../reducer/FlightInfo'

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    flight: FlightInfoSlice,
  },
})




export type RootState = ReturnType<typeof store.getState>