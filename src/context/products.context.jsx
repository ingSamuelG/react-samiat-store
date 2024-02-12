import { createContext, useState, useEffect } from "react";

export const ProductsCtx = createContext({
  products: null,
  setProducts: () => {},
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
