import { useContext } from "react";
import { ProductsCtx } from "../../context/products.context";
import "./shop.style.scss";
import ProductCard from "../../components/product-card/product-card.component";

function Shop() {
  const { products } = useContext(ProductsCtx);
  return (
    <div className="products-container">
      {products.map(({ id, title, thumbnail, price }) => (
        <ProductCard
          id={id}
          title={title}
          thumbnail={thumbnail}
          price={price}
          key={id}
        />
      ))}
    </div>
  );
}

export default Shop;
