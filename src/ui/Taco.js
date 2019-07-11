import React from "react";
import styled from "styled-components";
import { mapKeys } from "lodash";
import ErrorBoundary from "../containers/ErrorBoundary";

function Taco({ taco, match }) {
  // const [tacos, addTacos] = useState([]);
  // const [taco, setTaco] = useState({});
  return (
    <TacoRecipe>
      <Header>{taco.base_layer.name} Taco</Header>
      <Section>
        <Name>{taco.base_layer.name}</Name>
        <Recipe>
          {taco.base_layer.description ? taco.base_layer.description : null}
        </Recipe>
      </Section>
      <Section>
        <Name>{taco.mixin.name}</Name>
        <Recipe>
          {taco.mixin.description ? taco.mixin.description : null}
        </Recipe>
      </Section>
      <Section>
        <Name>{taco.condiment.name}</Name>
        <Recipe>
          {taco.condiment.description ? taco.condiment.description : null}
        </Recipe>
      </Section>
      <Section>
        <Name>{taco.seasoning.name}</Name>
        <Recipe>
          {taco.seasoning.description ? taco.seasoning.description : null}
        </Recipe>
      </Section>
      <Section>
        <Name>{taco.shell.name}</Name>
      </Section>
      
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

const Section = styled.ul`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.li`
  text-decoration: none;
  color: grey;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
`;

const Recipe = styled.li`
  text-decoration: none;
  color: darkgrey;
  font-size: 0.8rem;
  line-height: 1.4rem;
  text-align: left;
`;

const Tag = styled.li`
  text-decoration: none;
  color: darkgreen;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
`;
