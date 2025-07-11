import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';

const store = configureStore({
   reducer: {
      counter,
   },
});

export default store;
