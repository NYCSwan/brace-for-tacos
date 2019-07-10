import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Foot = styled.footer`
  position: fixed;
  background-color: papayawhip;
  height: 70px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    font-size: calc(5px + 1vmin);
    color: charcoal;
  }
  > a {
    font-size: calc(5px + 1vmin);
    color: charcoal;
    text-decoration: none;
  }
`;
export default function Footer() {
  return (
    <Foot>
      <p>Megan Swanby</p>
      <Link to="/" alt="Megan's Portfolio Website">
        Portfolio
      </Link>
    </Foot>
  );
}
