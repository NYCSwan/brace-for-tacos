import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import Search from "../containers/Search";

function TacoList({ tacos, match }) {
  // const [tacos, addTacos] = useState([]);
  // const [taco, setTaco] = useState({});
  // debugger;
  if (tacos === undefined) {
    return (
      <div>
        <h1>Oops. No tacos yet. Add to your list on the homepage.</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
  return (
    <TacoRecipes>
      {tacos.map(t => {
        // debugger;
        return <RecipeCard key={t.mixin.name} taco={t} />;
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
