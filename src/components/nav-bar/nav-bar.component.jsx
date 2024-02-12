import { Link } from "react-router-dom";
import "./nav-bar.style.scss";
import { ReactComponent as SamiatLogo } from "../../assets/logo.svg";
import { UserCtx } from "../../context/user.context";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.componet";

const NavBar = () => {
  const { currentUser } = useContext(UserCtx);
  const { cart } = useContext(CartCtx);
  const { isCartDropDownOpen } = cart;

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <SamiatLogo className="logo"></SamiatLogo>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="shop">
          Shop
        </Link>
        {currentUser ? (
          <span onClick={signOutUser} className="nav-link" to="auth">
            Sing out
          </span>
        ) : (
          <Link className="nav-link" to="auth">
            Sing in
          </Link>
        )}
        <a
          href="https://maps.app.goo.gl/ZxptzKmrqbiBpdoCA"
          rel="noopener noreferrer"
          target="_blank"
          className="nav-link"
        >
          Como llegar
        </a>
        <CartIcon />
      </div>
      {isCartDropDownOpen && <CartDropdown />}
    </div>
  );
};

export default NavBar;
