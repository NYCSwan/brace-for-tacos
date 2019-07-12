import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Foot = styled.footer`
  position: fixed;
  background-color: #464542;
  height: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    font-size: calc(5px + 1vmin);
    color: #eef1e8;
  }
  > a {
    font-size: calc(5px + 1vmin);
    color: #eef1e8;
    text-decoration: none;
  }
`;
export default function Footer() {
  return (
    <Foot>
      <p>Megan Swanby</p>
      <Link
        to="https://hidden-waters-48073.herokuapp.com"
        alt="Megan's Portfolio Website - WORK IN PROGRESS"
      >
        Portfolio
      </Link>
    </Foot>
  );
}
