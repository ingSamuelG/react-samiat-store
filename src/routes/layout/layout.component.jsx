import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "../../components/nav-bar/nav-bar.component";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
