import styled from "styled-components";
import { Collapse, Navbar, NavLink } from "reactstrap";

export const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
`;

export const StyledLink = styled(NavLink)`
  color: #111;
`;

export const StyledCollapse = styled(Collapse)`
display: "flex", width: "100vw", justifyContent: "center"
`;
