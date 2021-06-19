import styled from "styled-components";
import { Collapse, NavLink, NavbarBrand } from "reactstrap";

export const StyledLink = styled(NavLink)`
  color: dark-orange !important;
`;

export const StyledCollapse = styled(Collapse)`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Logo = styled(NavbarBrand)`
  margin-left: 25px;
  color: dark-blue !important;
  font-weight: 900;
`;