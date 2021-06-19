import React from "react";

import { useNavigationContainer } from "./container";
import { NavbarToggler, Navbar, Nav, NavItem } from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems, contactItems } =
    useNavigationContainer();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap row",
          justifyContent: "flex-end",
        }}
      >
        {contactItems.map(
          (
            {
              icon,
              value,
              name,
            }: { icon: string; value: string; name: string },
            idx: number
          ) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexFlow: "wrap row",
                marginRight: "15px",
              }}
            >
              <b>{name}:</b> <p>{value}</p>
            </div>
          )
        )}
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