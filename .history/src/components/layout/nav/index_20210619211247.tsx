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
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Buraczyńscy</NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navigationItems.map(({ name, link, icon }) => (
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          ))}

          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};
