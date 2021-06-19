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
} from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems } = useNavigationContainer();

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand href="/">Buraczyńscy</NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navigationItems.map(({ name, link, icon }) => (
            <NavItem>
              <S.styledLink href={link} style={{ color: "#ffff" }}>
                {name}
              </NavLiS.styledLinknk>
            </NavItem>
          ))}
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  );
};
