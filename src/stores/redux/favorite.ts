import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favoriteMeals',
  initialState: {
    favoriteMealIds: [] as string[],
  },
  reducers: {
    addFavoriteMeal(state, action: { payload: { id: string } }) {
      state.favoriteMealIds.push(action.payload.id);
    },
    removeFavoriteMeal(state, action: { payload: { id: string } }) {
      state.favoriteMealIds = state.favoriteMealIds.filter(
        (id) => id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteMeal, removeFavoriteMeal } = favoriteSlice.actions;
export default favoriteSlice.reducer;
