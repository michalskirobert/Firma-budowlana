import React from "react";

import { useNavigationContainer } from "./container";
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems } = useNavigationContainer();

  return (
    <S.StyledNavbar color="primary" light expand="md">
      <NavbarBrand href="/">Buraczyńscy</NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse
        isOpen={isNavOpen}
        navbar
        style={{ display: "flex", width: "100vw", justifyContent: "center" }}
      >
        <Nav className="mr-auto" navbar>
          {navigationItems.map(({ name, link, icon }) => (
            <NavItem>
              <S.StyledLink href={link} style={{ color: "#ffff" }}>
                {name}
              </S.StyledLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </S.StyledNavbar>
  );
};
