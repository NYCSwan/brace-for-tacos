import React from "react";
import styled from "styled-components";
import Taco from "./Taco";

function TacoList({ tacos }) {
  // const [tacos, addTacos] = useState([]);
  // const [taco, setTaco] = useState({});
  // debugger;
  return (
    <TacoRecipes>
      {tacos.map(t => {
        // debugger;
        return <Taco key={t.mixin.name} taco={t} />;
      })}
    </TacoRecipes>
  );
}

export default TacoList;

const TacoRecipes = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: visible;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
