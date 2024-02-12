import React from "react";
import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cart } = useContext(CartCtx);
  const { cartItems } = cart;

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Link to="checkout">
        <Button type="button">Go to check out</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
