import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   favoritesMovies: [],
   status: 'loading',
};

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      addFavoritesMove: (state, action) => {
         const dataFilm = action.payload;
         state.favoritesMovies = [...state.favoritesMovies, dataFilm];
      },
   },
});

export default favoritesSlice.reducer;
export const { addFavoritesMove } = favoritesSlice.actions;
