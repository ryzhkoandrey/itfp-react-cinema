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
         const stringifyDataFilm = JSON.stringify(dataFilm);
         localStorage.setItem('favoritesMovies', stringifyDataFilm);
         state.favoritesMovies.push(dataFilm);
      },
   },
});

export default favoritesSlice.reducer;
export const { addFavoritesMove } = favoritesSlice.actions;
