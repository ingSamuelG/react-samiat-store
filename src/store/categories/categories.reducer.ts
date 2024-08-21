import { Category } from "./categories.type";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.actions';
import { UnknownAction } from "redux";


export type CategoryState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as UnknownAction): CategoryState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }

  return state
};