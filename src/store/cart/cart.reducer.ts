import { CartItem, } from "./cart.type";
import { setCartItems, removeOneCartItem, toggleCartDropDown, deleteCartItem } from "./cart.action";
import { UnknownAction } from "redux";


export type CartTotalsSummary = {
  cartTotal: number
  cartCount: number
}

export type CartState = {
  readonly isCartDropDownOpen: Boolean
  readonly cartItems: CartItem[]
  readonly cartTotalsSummary: CartTotalsSummary
}

const INITIAL_STATE: CartState = {
  isCartDropDownOpen: false,
  cartItems: [],
  cartTotalsSummary: { cartCount: 0, cartTotal: 0 }
};

const setCartItemQtyWithCallbackResult = (
  callback: (quantity: number) => number,
  cartItems: CartItem[],
  productToAdd: CartItem
): CartItem[] => {
  let found = false; // create a flag to mark if we found the same product in the card first state is false

  if (cartItems.length > 0) {
    // if the cart is not empty
    const newItems = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        // if you find the same product
        found = true; // mark the flag
        const newQty = callback(item.quantity);
        // increse the quantity
        return { ...productToAdd, quantity: newQty }; // set the item with the new qnty
      } else {
        // else just give me the same item
        return item;
      }
    });

    if (found === false) {
      // if we checked the array and dint find anything
      newItems.push({ ...productToAdd, quantity: 1 }); // just add a new one
    }

    return newItems;
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const deleteProductFromArray = (items: CartItem[], productToDelete: CartItem): CartItem[] =>
  items.filter((item) => item.id !== productToDelete.id);

const removeProductFromItemArray = (items: CartItem[], productToRemove: CartItem): CartItem[] => {
  if (productToRemove.quantity === 1) {
    return deleteProductFromArray(items, productToRemove);
  } else {
    return setCartItemQtyWithCallbackResult(
      (qnty) => qnty - 1,
      items,
      productToRemove
    );
  }
};

const calculateProductTotalQtyAndTotalAmount = (items: CartItem[]): CartTotalsSummary => {
  return items.reduce(
    (accum, currentItem) => {
      const { cartTotal, cartCount } = accum;
      const calcTotalAmount =
        currentItem.price * currentItem.quantity + cartTotal;
      const calcTotalQty = currentItem.quantity + cartCount;

      return { cartTotal: calcTotalAmount, cartCount: calcTotalQty };
    },
    { cartTotal: 0, cartCount: 0 }
  );
};

export const cartReducer = (state = INITIAL_STATE, action = {} as UnknownAction): CartState => {
  if (setCartItems.match(action)) {
    const newCartItems = setCartItemQtyWithCallbackResult(
      (qnty) => qnty + 1,
      state.cartItems,
      action.payload
    );
    const totals =
      calculateProductTotalQtyAndTotalAmount(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalsSummary: totals
    };
  }

  if (toggleCartDropDown.match(action)) {
    const { isCartDropDownOpen } = state;
    const newValueForDropDown = !isCartDropDownOpen;
    return {
      ...state,
      isCartDropDownOpen: newValueForDropDown,
    };
  }

  if (deleteCartItem.match(action)) {
    const newCartItems = deleteProductFromArray(state.cartItems, action.payload);

    const totals =
      calculateProductTotalQtyAndTotalAmount(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalsSummary: totals
    };
  }

  if (removeOneCartItem.match(action)) {
    const newCartItems = removeProductFromItemArray(state.cartItems, action.payload);

    const totals =
      calculateProductTotalQtyAndTotalAmount(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      cartTotalsSummary: totals
    };
  }

  return state

};