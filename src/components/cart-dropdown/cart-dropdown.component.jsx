import React from "react";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCartDropDown } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    dispatch(toggleCartDropDown());
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </CartItems>
      ) : (
        <EmptyMessage>No items to show</EmptyMessage>
      )}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        type="button"
        onClick={goToCheckOutHandler}
      >
        Go to check out
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
