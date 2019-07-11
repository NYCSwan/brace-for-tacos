import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../swan_logo.png";
import Home from "../containers/Home";
import TacoList from "./TacoList";

function Header() {
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
      <NavLink to="/" activeClassName="selected">
        Home{" "}
      </NavLink>
      <NavLink to="/tacos" activeClassName="selected">
        Tacos{" "}
      </NavLink>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #282c34;
  min-height: 6vh;
  display: flex;
  flex-direction: row wrap;
  align-items: center;
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
}
`;

export default Header;
