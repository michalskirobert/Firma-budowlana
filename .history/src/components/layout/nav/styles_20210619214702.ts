import styled from "styled-components";
import { Navbar, NavLink } from "reactstrap";

export const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  height: 5vh;
`;

export const StyledLink = styled(NavLink)`
  color: #111;
`;
