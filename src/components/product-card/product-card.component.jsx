import React from "react";
import "./product-card.style.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = (product) => {
  const { title, thumbnail, price } = product;
  const { addItemToCart } = useContext(CartCtx);
  const handleAddProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={`${thumbnail}`} alt={`product ${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={handleAddProductToCart}
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
