import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
  }

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { updateSearch } = SearchSlice.actions

export default SearchSlice.reducer