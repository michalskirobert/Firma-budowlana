import React from "react";

import { useNavigationContainer } from "./container";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems } = useNavigationContainer();

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand href="/">Buraczyńscy</NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar color="danger">
          {navigationItems.map(({ name, link, icon }) => (
            <NavItem>
              <NavLink href={link}>{name}</NavLink>
            </NavItem>
          ))}
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  );
};
