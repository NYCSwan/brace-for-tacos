import React, { useState, useEffect } from "react";
import { dropRightWhile, replace, split, forIn, mapValues } from "lodash";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Search from "./Search";
import Taco from "../ui/Taco";
import usePrevious from "../utils/usePrevious";

function Home({ match }) {
  const [loading, setLoading] = useState(false);
  const [tacos, addTacos] = useState([]);
  const [taco, setTaco] = useState({});

  const prevTaco = usePrevious(taco);

  async function onButtonClick() {
    console.log("click");
    if (loading) return;
    setLoading(true);
    const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
    let taco = await result.json();
    taco = formatTacoResults(taco);
    setTaco(taco);
    console.log("taco", taco);
    // console.log("tacos", tacos);
    setLoading(false);

    return taco;
  }

  function formatTacoResults(taco) {
    forIn(taco, (value, key) => {
      value.recipe = split(value.recipe, /\=(?!=)|\#(?!#)/g); //split on last = or #
      if (value.recipe.length <= 1) {
        return taco; // not formatted
      } else {
        value.recipe.filter(i => {
          return typeof i === "string" && i.length > 2;
        }); //remove undefined and random characters
      }
      value.tags = value.recipe[1].split("tags")[1];
      value.ingredients = value.recipe[1].split(/(Ingredients)|\*/g);
      if (value.ingredients.length > 1) {
        value.ingredients = value.ingredients.filter(i => {
          return typeof i === "string" && i.length > 2;
        }); //remove undefined
        value.directions = value.ingredients.pop();
        value.description = value.ingredients.shift();
        value.ingredients = value.ingredients;
      }
    });

    taco.tags = mapValues(taco, (value, key) => {
      if (value.tags === "undefined") {
        delete value.tags;
      } else {
        return value.tags
      }
    });

    taco.id = replace(taco.base_layer.name, /\s/g, "");
    return taco;
  }

  useEffect(() => {
    function updateTacos() {
      addTacos([...tacos, taco]);
    }
    // debugger;
    if (taco.hasOwnProperty("id") && prevTaco !== taco) {
      updateTacos();
    }
  }, [tacos, taco, prevTaco]);

  return (
    <Outer>
      <React.Fragment>
        <HeaderText>
          Everyone loves tacos! I love to cook and eat. It is a fundamental part
          of who I am. Click on the button to find a recipe.
        </HeaderText>
        <Search onButtonClick={onButtonClick} />
      </React.Fragment>

      {taco.hasOwnProperty("id") && <Taco taco={taco} match={match} />}
    </Outer>
  );
}

const Outer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
`;

const HeaderText = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  width: 70%;
`;
export default Home;
