import { CART_ACTION_TYPES, CartItem } from "./cart.type";
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_NEW_ITEM_TO_CART, CartItem>
export type RemoveOneCartTime = ActionWithPayload<CART_ACTION_TYPES.REMOVE_ONE_CART_ITEM, CartItem>
export type DeleteCartItem = ActionWithPayload<CART_ACTION_TYPES.DELETE_CART_ITEM, CartItem>
export type ToggleCartDropDown = Action<CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN>

export const setCartItems = withMatcher((item: CartItem): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_NEW_ITEM_TO_CART, item))

export const removeOneCartItem = withMatcher((item: CartItem): RemoveOneCartTime =>
  createAction(CART_ACTION_TYPES.REMOVE_ONE_CART_ITEM, item))

export const deleteCartItem = withMatcher((item: CartItem): DeleteCartItem =>
  createAction(CART_ACTION_TYPES.DELETE_CART_ITEM, item))

export const toggleCartDropDown = withMatcher((): ToggleCartDropDown =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN, null))
