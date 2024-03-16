import { CART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE = {
  isCartDropDownOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const setCartItemQtyWithCallbackResult = (
  callback,
  cartItems,
  productToAdd
) => {
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

const deleteProductFromArray = (itemsArray, productToDelete) =>
  itemsArray.filter((item) => item.id !== productToDelete.id);

const removeProductFromItemArray = (items, productToRemove) => {
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

const calculateProductTotalQtyAndTotalAmount = (products) => {
  return products.reduce(
    (accum, currentItem) => {
      const { totalAmount, totalQty } = accum;
      const calcTotalAmount =
        currentItem.price * currentItem.quantity + totalAmount;
      const calcTotalQty = currentItem.quantity + totalQty;

      return { totalAmount: calcTotalAmount, totalQty: calcTotalQty };
    },
    { totalAmount: 0, totalQty: 0 }
  );
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { cartItems } = state;

  switch (type) {
    case CART_ACTION_TYPES.SET_NEW_ITEM_TO_CART: {
      const newCartItems = setCartItemQtyWithCallbackResult(
        (qnty) => qnty + 1,
        cartItems,
        payload
      );
      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      return {
        ...state,
        cartItems: newCartItems,
        cartCount: totalQty,
        cartTotal: totalAmount,
      };
    }

    case CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN:
      const { isCartDropDownOpen } = state;
      const newValueForDropDown = !isCartDropDownOpen;
      return {
        ...state,
        isCartDropDownOpen: newValueForDropDown,
      };

    case CART_ACTION_TYPES.DELETE_CART_ITEM: {
      const newCartItems = deleteProductFromArray(cartItems, payload);

      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      return {
        ...state,
        cartItems: newCartItems,
        cartCount: totalQty,
        cartTotal: totalAmount,
      };
    }

    case CART_ACTION_TYPES.REMOVE_ONE_CART_ITEM: {
      const newCartItems = removeProductFromItemArray(cartItems, payload);

      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      return {
        ...state,
        cartItems: newCartItems,
        cartCount: totalQty,
        cartTotal: totalAmount,
      };
    }
    default:
      return state;
  }
};
