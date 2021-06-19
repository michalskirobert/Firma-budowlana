import React from "react";

import { useNavigationContainer } from "./container";
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems, contactItems } = useNavigationContainer();

  return (
    <>
      <div>
        {contactItems.map(({icon, value, name}) => <b>{name}</b> <p>{value}</p>)}
      </div>
      <Navbar color="warning" light expand="md">
        <S.Logo href="/">Buraczyńscy</S.Logo>
        <NavbarToggler onClick={toggleNav} />
        <S.StyledCollapse isOpen={isNavOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigationItems.map(({ name, link, icon }) => (
              <NavItem>
                <S.StyledLink href={link}>{name}</S.StyledLink>
              </NavItem>
            ))}
          </Nav>
        </S.StyledCollapse>
      </Navbar>
    </>
  );
};
