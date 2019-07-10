import React from "react";
import styled from "styled-components";
import ErrorBoundary from "../containers/ErrorBoundary";

function Taco({ taco }) {
  // const [tacos, addTacos] = useState([]);
  // const [taco, setTaco] = useState({});
  // debugger;
  return (
    <TacoRecipe>
      <Header>{taco.base_layer.name} Taco</Header>
      <Component>
        <Name>{taco.base_layer.name}</Name>
        <Recipe>{taco.base_layer.recipe}</Recipe>
      </Component>
      <Component>
        <Name>{taco.shell.name}</Name>
        <Recipe>{taco.shell.recipe}</Recipe>
      </Component>
      <Component>
        <Name>{taco.mixin.name}</Name>
        <Recipe>{taco.mixin.recipe}</Recipe>
      </Component>
      <Component>
        <Name>{taco.condiment.name}</Name>
        <Recipe>{taco.condiment.recipe}</Recipe>
      </Component>
      <Component>
        <Name>{taco.seasoning.name}</Name>
        <Recipe>{taco.seasoning.recipe}</Recipe>
      </Component>
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
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

const Header = styled.h2`
  color: grey;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
`;

const Component = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.p`
  color: grey;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
`;

const Recipe = styled.p`
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1.4rem;
  text-align: left;
`;
