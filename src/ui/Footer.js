import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  position: fixed;
  background-color: papayawhip;
  height: 70px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > p {
    font-size: calc(5px + 1vmin);
    color: charcoal;
  }
`;
export default function Footer() {
  return (
    <Foot>
      <p>Megan Swanby</p>
    </Foot>
  );
}
