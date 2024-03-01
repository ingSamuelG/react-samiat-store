import React from "react";
import {
  CartDropdownContainer,
  CartItems,
  CheckOutButton,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cart, setCart } = useContext(CartCtx);
  const { cartItems } = cart;

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    setCart({ ...cart, isCartDropDownOpen: false });
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
