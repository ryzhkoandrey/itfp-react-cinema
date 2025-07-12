import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   films: [],
   status: null,
   errors: null,
};

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {
   try {
      const movies = await fetch(
         'https://686fd2504838f58d1123034b.mockapi.io/movie'
      );
      if (!movies.ok) throw new Error('Error on server, sorry');
      return movies.json();
   } catch (error) {
      console.error(error);
      throw error;
   }
});

const moviesSlice = createSlice({
   name: 'movie',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(fetchMovies.pending, (state) => {
         state.status = 'loading';
      });

      builder.addCase(fetchMovies.fulfilled, (state, action) => {
         state.films = action.payload;
         state.status = 'fulfilled';
      });

      builder.addCase(fetchMovies.rejected, (state, action) => {
         state.status = 'error';
         state.errors = action.error.message;
         console.error(action.error.message);
      });
   },
});

export default moviesSlice.reducer;
