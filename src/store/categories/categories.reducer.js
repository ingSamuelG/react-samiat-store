import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategoriesError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCategories, setCategoriesError } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
