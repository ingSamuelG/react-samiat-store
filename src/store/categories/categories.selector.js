import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

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
    }, {})
);
