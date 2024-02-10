import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../assets/shop-data.json";

export const ProductsCtx = createContext({
  products: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  const value = { products, setProducts };

  return <ProductsCtx.Provider value={value}>{children}</ProductsCtx.Provider>;
};
