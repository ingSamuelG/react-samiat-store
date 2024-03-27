import { call, all, takeLatest, put } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
