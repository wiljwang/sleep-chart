import React, { Fragment, useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { RegisterModal } from "./auth/RegisterModal";
import { LoginModal } from "./auth/LoginModal";
import { Logout } from "./auth/Logout";

export const AppNavbar = () => {
  const { isAuthenticated, user } = useContext(GlobalContext);
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{user ? `welcome ${user.name}` : ""}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Sleep Chart</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
