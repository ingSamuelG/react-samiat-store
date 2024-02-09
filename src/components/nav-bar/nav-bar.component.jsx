import { Link } from "react-router-dom";
import "./nav-bar.style.scss";
import { ReactComponent as SamiatLogo } from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <SamiatLogo className="logo"></SamiatLogo>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="shop">
          Shop
        </Link>
        <Link className="nav-link" to="auth">
          Sing in
        </Link>
        <a
          href="https://maps.app.goo.gl/ZxptzKmrqbiBpdoCA"
          rel="noopener noreferrer"
          target="_blank"
          className="nav-link"
        >
          Como llegar
        </a>
      </div>
    </div>
  );
};

export default NavBar;
