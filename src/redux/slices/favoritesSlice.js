import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {},
});

export default favoritesSlice.reducer;
// export const {} = favoritesSlice.actions;
