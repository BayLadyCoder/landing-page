import React from "react";
import { Nav, NavBarContainer, NavLogo, NavIcon } from "./NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">
          <NavIcon />
          ULTRA
        </NavLogo>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;
