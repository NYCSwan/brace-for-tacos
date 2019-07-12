import React, { useState, useEffect } from "react";
import { replace, split, forIn, mapValues } from "lodash";
import styled from "styled-components";
import Search from "../ui/Search";
import SearchParams from "../ui/SearchParams";
import TacoList from "../ui/TacoList";
import Taco from "../ui/Taco";
import usePrevious from "../utils/usePrevious";

function Home({ match }) {
  const [loading, setLoading] = useState(false);
  const [tacos, addTacos] = useState([]);
  const [taco, setTaco] = useState({});
  const [filteredList, filterTacosList] = useState([]);
  const [ingredient, updateIngredient] = useState("");

  const prevTaco = usePrevious(taco);
  const prevIngredient = usePrevious(ingredient);

  async function onButtonClick(e) {
    e.preventDefault();
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
      value.recipe = split(value.recipe, /\=(?!=)|\#(?!#)/g); // eslint-disable-line no-useless-escape
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
      }
    });

    taco.tags = mapValues(taco, (value, key) => {
      if (value.tags === "undefined") {
        delete value.tags;
      } else {
        return value.tags;
      }
    });

    taco.id = replace(taco.base_layer.name, /\s/g, "");
    return taco;
  }

  useEffect(() => {
    function updateFilteredList() {
      if (ingredient === undefined || ingredient === "") {
        filterTacosList(tacos);
        return;
      } //return full list
      const newList = filteredList;

      newList.forEach(recipe => {
        const base = recipe.base_layer.name;
        const mixin = recipe.mixin.name;
        const seasoning = recipe.seasoning.name;
        const condiment = recipe.condiment.name;
        const shell = recipe.shell.name;
        if (
          !base.includes(ingredient) &&
          !mixin.includes(ingredient) &&
          !seasoning.includes(ingredient) &&
          !condiment.includes(ingredient) &&
          !shell.includes(ingredient)
        ) {
          recipe = undefined;
          return recipe;
        }
        return recipe;
      });
      // debugger;
      filterTacosList(newList);
    }

    function updateTacos() {
      addTacos([...tacos, taco]);
      filterTacosList(tacos);
    }

    if (taco.hasOwnProperty("id") && prevTaco !== taco) {
      updateTacos();
    }
    if (ingredient !== prevIngredient) {
      updateFilteredList();
    } //filter out recipes that do not include ingredient
  }, [tacos, taco, prevTaco, ingredient, prevIngredient]);

  if (!taco.hasOwnProperty("id")) {
    return (
      <Outer>
        <HeaderText>
          Everyone loves tacos! I love to cook and eat. It is a fundamental part
          of who I am. This app uses the TacoFacy API to help you find a delish
          taco recipe to inspire your next meal.
        </HeaderText>
        <Subtext>Click on the button to find a recipe.</Subtext>
        <Search onButtonClick={onButtonClick} />
      </Outer>
    ); // starting screen '/'
  }
  return (
    <div>
      <p>How do you feel about {taco.base_layer.name} tacos?</p>
      <Taco taco={taco} match={match} />
      {tacos.length >= 1 && (
        <SearchParams
          tacos={tacos}
          ingredient={ingredient}
          updateIngredient={updateIngredient}
        />
      )}
      <Search onButtonClick={onButtonClick} />
      {filteredList.length >= 1 ? <TacoList tacos={filteredList} /> : null}
    </div>
  );
}

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 5rem;
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

const Subtext = styled.h3`
  font-size: 0.8rem;
  line-height: 1.2rem;
  width: auto;
`;
export default Home;
