import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./routes/layout/layout.component";
import Shop from "./routes/shop/shop.component";
import SingIn from "./routes/auth/auth.component";
import CheckOut from "./routes/checkout/checkout.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";

import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

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
