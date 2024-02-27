import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.componet";
import Category from "../category/category.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
