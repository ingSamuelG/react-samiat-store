import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./routes/layout/layout.component";
import Shop from "./routes/shop/shop.component";
import SingIn from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="sing-in" element={<SingIn/>}></Route>
      </Route>
    </Routes>
  );
}
export default App;
