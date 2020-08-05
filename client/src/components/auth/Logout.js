import React, { useContext, Fragment } from "react";
import { NavLink } from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";

export const Logout = () => {
  const { logout } = useContext(GlobalContext);

  return (
    <Fragment>
      <NavLink onClick={logout} href="#">
        Logout
      </NavLink>
    </Fragment>
  );
};
