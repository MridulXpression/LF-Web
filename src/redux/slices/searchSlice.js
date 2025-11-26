import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentSearches: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      const query = action.payload.trim();

      // Remove the query if it already exists
      state.recentSearches = state.recentSearches.filter(
        (search) => search !== query
      );

      // Add the query to the beginning
      state.recentSearches.unshift(query);

      // Keep only the last 3 searches
      state.recentSearches = state.recentSearches.slice(0, 3);
    },
    clearSearchHistory: (state) => {
      state.recentSearches = [];
    },
  },
});

export const { addSearch, clearSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
