import React from "react";
import styled from "styled-components";
import ErrorBoundary from "../containers/ErrorBoundary";
import recipeImage from "./recipe-card.png";

function Taco({ taco }) {
  return (
    <TacoRecipe>
      <Header>{taco.base_layer.name} Taco</Header>
      <Section>
        {taco.base_layer.description ? (
          <Description>{taco.base_layer.description}</Description>
        ) : null}

        <Name>{taco.base_layer.name}</Name>
        {taco.base_layer.instructions
          ? taco.base_layer.instructions.map(line => {
              return <Ingredient key={line}>{line}</Ingredient>;
            })
          : null}
        <Name>{taco.mixin.name}</Name>

        {taco.mixin.description ? (
          <Recipe>{taco.mixin.description}</Recipe>
        ) : null}

        {taco.mixin.instructions
          ? taco.mixin.instructions.map(line => {
              return <Ingredient key={line}>{line}</Ingredient>;
            })
          : null}
        <Name>{taco.condiment.name}</Name>

        {taco.condiment.directions ? (
          <Recipe>{taco.condiment.directions}</Recipe>
        ) : null}

        <Name>{taco.seasoning.name}</Name>

        {taco.seasoning.directions ? (
          <Recipe>{taco.seasoning.directions}</Recipe>
        ) : null}

        {taco.seasoning.directions ? (
          <Recipe>{taco.seasoning.directions}</Recipe>
        ) : null}
        <Name>{taco.shell.name}</Name>
      </Section>
      {taco && taco.tags.length > 1 ? <Tag>{taco.tags}</Tag> : null}
    </TacoRecipe>
  );
}

export default function TacoWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Taco {...props} />
    </ErrorBoundary>
  );
}

const TacoRecipe = styled.div`
  height: auto;
  min-height: 350px;
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: visible;
  background-color: #efefef;
  background-image: url(${recipeImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header = styled.h2`
  color: grey;
  font-size: 1em;
  line-height: 1.4em;
  text-align: center;
`;

const Section = styled.ul`
  height: auto;
  width: 90%;
  list-style: none;
  padding-top: 5%;
  padding-bottom: 10%;
`;

const Name = styled.li`
  text-decoration: none;
  color: grey;
  font-size: 0.9rem;
  line-height: 1.3rem;
  text-align: left;
`;

const Recipe = styled.li`
  text-decoration: none;
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: left;
`;

const Description = styled.li`
  text-decoration: none;
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: left;
  width: 80%;
  padding-bottom: 10px;
`;

const Ingredient = styled.li`
  color: darkgrey;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  display: inline;
`;

const Tag = styled.li`
  color: darkgreen;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  list-style: none;
`;
