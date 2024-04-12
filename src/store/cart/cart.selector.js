// import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectTogleDropdown = (state) => state.cart.isCartDropDownOpen;

export const selectCartCount = (state) => state.cart.cartCount;

export const selectCartTotal = (state) => state.cart.cartTotal;

// export const selectTogleDropdown = createSelector(
//   [selectCartReducer],
//   (cartSlice) => cartSlice.isCartDropDownOpen
// );
