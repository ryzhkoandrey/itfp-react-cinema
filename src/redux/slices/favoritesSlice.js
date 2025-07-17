import { createSlice } from '@reduxjs/toolkit';

function loadFavoritesMovies() {
   const dataLocal = localStorage.getItem('favoritesMovies');
   const parseData = dataLocal ? JSON.parse(dataLocal) : [];
   return parseData;
}

const initialState = {
   favoritesMovies: loadFavoritesMovies(),
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
