import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./routes/layout/layout.component";
import Shop from "./routes/shop/shop.component";
import SingIn from "./routes/auth/auth.component";
import CheckOut from "./routes/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<SingIn />}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
