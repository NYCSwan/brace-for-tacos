import React from "react";
import styled from "styled-components";

export default function RecipeCard({ taco, deleteOnClick }) {
  return (
    <Recipe>
      <Icon
        onClick={e => deleteOnClick(e, taco.id)}
        onBlur={e => deleteOnClick(e)}
      >
        X
      </Icon>
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
  width: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
  border: #8d9093 1px solid;
`;

const Header = styled.h3`
  color: #343330;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;
  align-self: flex-start;
  width: 80%;
`;

const Icon = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  color: #343330;
`;

const Section = styled.ul`
  height: auto;
  width: 80%;
  list-style: none;
`;

const Text = styled.li`
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: left;
  text-decoration: none;
`;
