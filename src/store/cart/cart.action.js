import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCartItems = (item) =>
  createAction(CART_ACTION_TYPES.SET_NEW_ITEM_TO_CART, item);

export const removeOneCartItem = (item) =>
  createAction(CART_ACTION_TYPES.REMOVE_ONE_CART_ITEM, item);

export const deleteCartItem = (item) =>
  createAction(CART_ACTION_TYPES.DELETE_CART_ITEM, item);

export const toggleCartDropDown = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN, null);
