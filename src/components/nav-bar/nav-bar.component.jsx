// import { Link } from "react-router-dom";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./nav-bar.style";
import { ReactComponent as SamiatLogo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.componet";
import { selectTogleDropdown } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.util";

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartDropDownOpen = useSelector(selectTogleDropdown);

  const handleSignOut = async () => {
    await signOutUser();
  };

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
            onClick={handleSignOut}
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
