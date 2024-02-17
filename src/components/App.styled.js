import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: grey;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.3s;

  &.active {
    color: blue;
  }
`;
