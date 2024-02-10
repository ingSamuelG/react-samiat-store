import React from "react";
import "./product-card.style.scss";
import Button from "../button/button.component";

const ProductCard = ({ id, title, thumbnail, price }) => {
  return (
    <div className="product-card-container" key={id}>
      <img src={`${thumbnail}`} alt={`product ${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
