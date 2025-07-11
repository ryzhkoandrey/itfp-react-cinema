import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   films: [],
   status: null,
   errors: null,
};

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {
   try {
      const movies = await fetch(
         'https://686fd2504838f58d1123034b.mockapi.io/movies'
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
   },
});

export default moviesSlice.reducer;
