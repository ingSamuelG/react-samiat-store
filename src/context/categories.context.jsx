import { createContext, useState, useEffect } from "react";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.util";

export const CategoriesCtx = createContext({
  categoriesMap: null,
  setcategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const cMap = await getCategoriesAndDocuments();
      setCategoriesMap(cMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesCtx.Provider value={value}>{children}</CategoriesCtx.Provider>
  );
};
