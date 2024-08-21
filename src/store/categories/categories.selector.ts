import { createSelector } from "reselect";
import { CategoryState } from './categories.reducer';
import { CategoryMap } from "./categories.type";


const selectCategoriesReducer = (state): CategoryState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesValue) => categoriesValue.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, docSnapShot) => {
      const { title, items } = docSnapShot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
