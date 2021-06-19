import styled from "styled-components";
import { Collapse, NavLink, NavbarBrand } from "reactstrap";

export const StyledLink = styled(NavLink)`
  color: #ffff !important;
`;

export const StyledCollapse = styled(Collapse)`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Logo = styled(NavbarBrand)`
  margin-left: 25px;
  color: dark-blue !important;
  background-color: white;
  &::after {
    background-color: white;
  }
`;
