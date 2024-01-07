import { configureStore } from '@reduxjs/toolkit';

import favoriteMealsReducer from './favorite';

export const store = configureStore({
  reducer: { favoriteMeals: favoriteMealsReducer },
});
