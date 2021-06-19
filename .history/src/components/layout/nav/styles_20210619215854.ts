import styled from "styled-components";
import { Collapse, NavLink, NavbarBrand } from "reactstrap";

export const StyledLink = styled(NavLink)`
  color: #111;
`;

export const StyledCollapse = styled(Collapse)`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Logo = styled(NavbarBrand)`
  color: white;
  background-color: white;
  margin-left: 25px;
`;
