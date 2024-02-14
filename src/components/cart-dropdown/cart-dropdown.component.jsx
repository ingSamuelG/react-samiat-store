import React from "react";
import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button type="button" onClick={goToCheckOutHandler}>
        Go to check out
      </Button>
    </div>
  );
};

export default CartDropdown;
