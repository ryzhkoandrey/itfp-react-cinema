import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   films: [],
   filmsCategory: ['Action'],
   status: 'loading',
   errors: null,
   searchFilm: {
      film: null,
      status: 'loading',
      error: null,
   },
   filteredMovies: [],
   filteredMoviesCategories: [],
};

export const fetchMovies = createAsyncThunk('movie/fetchmovies', () => {
   return axios
      .get('https://686fd2504838f58d1123034b.mockapi.io/movies')
      .then((response) => response.data)
      .catch((error) => {
         console.error(error);
         throw error;
      });
});

const moviesSlice = createSlice({
   name: 'movie',
   initialState,
   reducers: {
      searchFilmInState: (state, action) => {
         const { id } = action.payload;
         const searchFilm = state.films.find((film) => film.id === id);

         state.searchFilm.film = searchFilm;
         state.searchFilm.status = 'fulfilled';
      },

      filterMovies: (state, action) => {
         const searchTerm = action.payload.toLowerCase();

         state.filteredMovies = state.films.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm)
         );
      },

      searchCategoriesFilms: (state, action) => {
         if (action.payload === 'All') state.filteredMoviesCategories = [];

         const searchFilms = state.films.filter((value) =>
            value.category.includes(action.payload)
         );

         state.filteredMoviesCategories = searchFilms;
      },
   },

   extraReducers: (builder) => {
      builder.addCase(fetchMovies.pending, (state) => {
         state.status = 'loading';
      });

      builder.addCase(fetchMovies.fulfilled, (state, action) => {
         state.films = action.payload;
         state.filmsCategory = [
            ...new Set(action.payload.flatMap((value) => value.category)),
         ];
         state.status = 'fulfilled';
      });

      builder.addCase(fetchMovies.rejected, (state, action) => {
         state.status = 'loading';
         state.errors = action.error.message;
         console.error(action.error.message);
      });
   },
});

export default moviesSlice.reducer;
export const { searchFilmInState, filterMovies, searchCategoriesFilms } =
   moviesSlice.actions;
