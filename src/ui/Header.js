import React from "react";
import styled from "styled-components";
import logo from "../swan_logo.png";

function Header() {
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #282c34;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
`;
const Logo = styled.img`
  height: 2vmin;
  pointer-events: none;
}
`;

export default Header;
