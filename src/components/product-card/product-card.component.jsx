import React from "react";
import "./product-card.style.scss";
import Button from "../button/button.component";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = (product) => {
  const { title, thumbnail, price } = product;
  const { addItemToCart } = useContext(CartCtx);

  return (
    <div className="product-card-container">
      <img src={`${thumbnail}`} alt={`product ${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => {
          addItemToCart(product);
        }}
        type="button"
        buttonType="inverted"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
