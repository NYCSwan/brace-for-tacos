import React, { useState } from "react";
import styled from "styled-components";

// abrev version of recipes in stack, not open one in this form
export default function RecipeCard({ taco, deleteOnClick }) {
  return (
    <Recipe>
      <div onClick={deleteOnClick} onBlur={deleteOnClick}>
        close
      </div>
      <Header>{taco.base_layer.name} Tacos</Header>
      <Section>
        <Text>{taco.base_layer.name}</Text>
        <Text>{taco.mixin.name}</Text>
        <Text>{taco.condiment.name}</Text>
        <Text>{taco.seasoning.name}</Text>
        <Text>{taco.shell.name}</Text>
      </Section>
    </Recipe>
  );
}

const Recipe = styled.div`
  height: 200px;
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
`;

const Header = styled.h3`
  color: grey;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
`;

const Section = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.p`
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1.4rem;
  text-align: left;
`;
