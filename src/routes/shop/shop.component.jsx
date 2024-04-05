import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.componet";
import Category from "../category/category.component";
import { setCategories } from "../../store/categories/categories.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
