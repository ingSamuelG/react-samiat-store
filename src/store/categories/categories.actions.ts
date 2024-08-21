import { CATEGORIES_ACTION_TYPES, Category } from './categories.type';
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[] >
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,Error>

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
})

export const fetchCategoriesFailed = withMatcher((error:Error): FetchCategoriesFailed=> {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);
})
