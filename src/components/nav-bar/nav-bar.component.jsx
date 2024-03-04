// import { Link } from "react-router-dom";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./nav-bar.style";
import { ReactComponent as SamiatLogo } from "../../assets/logo.svg";
import { UserCtx } from "../../context/user.context";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.componet";

const NavBar = () => {
  const { currentUser } = useContext(UserCtx);
  const { isCartDropDownOpen } = useContext(CartCtx);

  return (
    <NavigationContainer>
      <LogoContainer className="logo-container" to="/">
        <SamiatLogo className="logo"></SamiatLogo>
      </LogoContainer>
      <NavLinks>
        <NavLink className="nav-link" to="shop">
          Shop
        </NavLink>
        {currentUser ? (
          <NavLink
            as="span"
            onClick={signOutUser}
            className="nav-link"
            to="auth"
          >
            Sing out
          </NavLink>
        ) : (
          <NavLink className="nav-link" to="auth">
            Sing in
          </NavLink>
        )}
        <NavLink
          as="a"
          href="https://maps.app.goo.gl/ZxptzKmrqbiBpdoCA"
          rel="noopener noreferrer"
          target="_blank"
          className="nav-link"
        >
          Como llegar
        </NavLink>
        <CartIcon />
      </NavLinks>
      {isCartDropDownOpen && <CartDropdown />}
    </NavigationContainer>
  );
};

export default NavBar;
