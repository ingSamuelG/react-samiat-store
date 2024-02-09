import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "../../components/nav-bar/nav-bar.component";
import AlertContainer from "../../components/alert-container/alert-container.component";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      {/* <AlertContainer /> */}
      <Outlet />
    </Fragment>
  );
};

export default Layout;
