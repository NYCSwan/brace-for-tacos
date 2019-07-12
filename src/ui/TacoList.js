import React from "react";
import { Link } from "react-router-dom";
// import { remove } from "lodash";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

function TacoList({ tacos, deleteOnClick }) {
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
        return (
          <RecipeCard
            key={`${t.mixin.name}-${t.condiment.name}`}
            deleteOnClick={deleteOnClick}
            taco={t}
          />
        );
      })}
    </TacoRecipes>
  );
}

export default TacoList;

const TacoRecipes = styled.div`
  height: 100%;
  width: 90%;
  overflow-y: visible;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
