import React from "react";
import {
  CartDropdownContainer,
  CartItemList,
  CheckOutButton,
} from "./cart-dropdown.style.jsx";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
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
      <CartItemList>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </CartItemList>
      <CheckOutButton
        buttonType={BUTTON_TYPE_CLASSES.base}
        type="button"
        onClick={goToCheckOutHandler}
      >
        Go to check out
      </CheckOutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
