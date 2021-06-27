import React from "react";

import { useNavigationContainer } from "./container";
import { NavbarToggler, Navbar, Nav, NavItem } from "reactstrap";

import * as S from "./styles";

export const NavMenu = (): JSX.Element => {
  const { toggleNav, isNavOpen, navigationItems, contactItems, width } =
    useNavigationContainer();

  return (
    <>
      {width > 768 && (
        <div
          style={{
            display: "flex",
            flexFlow: "wrap row",
            justifyContent: "flex-end",
            marginTop: "15px",
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
                <b>
                  {icon} {name}:
                </b>
                <p>{value}</p>
              </div>
            )
          )}
        </div>
      )}
      <Navbar color="warning" light expand="md">
        <S.Logo href="/">Buraczyńscy</S.Logo>
        <NavbarToggler onClick={toggleNav} />
        <S.StyledCollapse isOpen={isNavOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigationItems.map(({ name, link, icon }, idx: number) => (
              <NavItem key={idx}>
                <S.StyledLink href={link}>
                  {icon} {name}
                </S.StyledLink>
              </NavItem>
            ))}
            <div style={{ borderTop: "1px solid #111", marginTop: "15px" }}>
              {width < 768 &&
                contactItems.map(
                  (
                    {
                      icon,
                      value,
                      name,
                    }: { icon: string; value: string; name: string },
                    idx: number
                  ) => (
                    <p key={idx}>
                      {icon} {name}: {value}
                    </p>
                  )
                )}
            </div>
          </Nav>
        </S.StyledCollapse>
      </Navbar>
    </>
  );
};
