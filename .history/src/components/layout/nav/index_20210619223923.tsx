import React from "react";

import { useNavigationContainer } from "./container";
import { NavbarToggler, Navbar, Nav, NavItem } from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems, contactItems } =
    useNavigationContainer();
  console.log({ contactItems: contactItems.map((item) => item.icon.name) });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap row",
        }}
      >
        {contactItems.map(({ icon, value, name }) => (
          <div
            style={{
              display: "flex",
              flexFlow: "wrap row",
              marginRight: "15px",
            }}
          >
            <b>
              <icon.name /> {name}:
            </b>
            <p>{value}</p>
          </div>
        ))}
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
