import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../swan_logo.png";

function Header() {
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
      <Menu>
        <NavLink to="/" activeClassName="selected">
          HOME{" "}
        </NavLink>
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #343330;
  border-bottom: #568203 solid 2px;
  min-height: 7vh;
  display: flex;
  flex-direction: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > a {
    font-size: calc(8px + 1vmin);
    text-decoration: none;
    color: white;
  }
}
`;

const Logo = styled.img`
  height: 3vmin;
  width: auto;
  pointer-events: none;
  margin-left: 3%;
}
`;

export default Header;
