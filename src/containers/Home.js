import React, { useState, useEffect } from "react";
import { findIndex, replace, split, forIn, findKey, remove } from "lodash";
import styled from "styled-components";
import Search from "../ui/Search";
import SearchParams from "../ui/SearchParams";
import TacoList from "../ui/TacoList";
import Taco from "../ui/Taco";
import usePrevious from "../utils/usePrevious";
import tacoImg from "../taco-love.jpg";

function Home({ match }) {
  const [loaded, setLoading] = useState(false);
  const [tacos, addTacos] = useState([]);
  const [taco, setTaco] = useState({});
  const [filteredList, filterTacosList] = useState([]);
  const [ingredient, updateIngredient] = useState("");

  const prevTaco = usePrevious(taco);
  const prevTacos = usePrevious(tacos);
  const prevIngredient = usePrevious(ingredient);

  async function onButtonClick(e) {
    e.preventDefault();

    const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
    let taco = await result.json();
    taco = formatTacoResults(taco);
    setTaco(taco);
    setLoading(true);

    return taco;
  }

  function onSubmitFilter(e) {
    e.preventDefault();
    const searchText = ingredient.toLowerCase();

    let tacoIndex = findIndex(tacos, taco => {
      if (
        taco.base_layer.name.toLowerCase().includes(searchText) ||
        taco.mixin.name.toLowerCase().includes(searchText) ||
        taco.seasoning.name.toLowerCase().includes(searchText) ||
        taco.shell.name.toLowerCase().includes(searchText) ||
        taco.condiment.name.toLowerCase().includes(searchText)
      ) {
        return taco;
      }
    });
    setTaco(tacos[tacoIndex]);
  }

  function formatTacoResults(taco) {
    forIn(taco, value => {
      value.recipe = split(value.recipe, /\=(?!=)|\#(?!#)/g); // eslint-disable-line no-useless-escape
      if (value.recipe.length <= 1) {
        return taco; // not formatted
      } else {
        value.recipe.filter(i => {
          return typeof i === "string" && i.length > 2;
        }); //remove undefined and random api string formats
      }

      let tag = value.recipe[1].split("tags:")[1];
      if (tag !== undefined) {
        value.tags = tag.trim();
        return value.tags;
      } //tags

      value.ingredients = value.recipe[1].split(/(Ingredients)|\*/g);
      if (value.ingredients.length > 1) {
        value.ingredients = value.ingredients.filter(i => {
          return typeof i === "string" && i.length > 2;
        }); //remove undefined
        value.directions = value.ingredients.pop();
        value.description = value.ingredients.shift();
        return value;
      } // ingredients
    }); //sort recipe layers

    const key = findKey(taco, layer => {
      return layer.tags;
    });
    taco.tags = taco[key].tags; // move tags

    taco.id = `${replace(taco.base_layer.name, /\s/g, "")}-${replace(
      taco.mixin.name,
      /\s/g,
      ""
    )}`;
    return taco;
  }

  function deleteOnClick(e, tacoId) {
    if (tacos.length === 1) {
      setTaco({});
      addTacos([]);
      filterTacosList([]);
      setLoading(false);
      return;
    }
    remove(tacos, taco => {
      return taco.id === tacoId;
    });
    addTacos(tacos);
    filterTacosList(tacos);
  }

  useEffect(() => {
    function updateFilteredList() {
      const newList = filteredList;

      newList.forEach(recipe => {
        const base = recipe.base_layer.name;
        const mixin = recipe.mixin.name;
        const seasoning = recipe.seasoning.name;
        const condiment = recipe.condiment.name;
        const shell = recipe.shell.name;
        if (
          !base.toLowerCase().includes(ingredient) &&
          !mixin.toLowerCase().includes(ingredient) &&
          !seasoning.toLowerCase().includes(ingredient) &&
          !condiment.toLowerCase().includes(ingredient) &&
          !shell.toLowerCase().includes(ingredient)
        ) {
          recipe = undefined;
          return recipe;
        }
        return recipe;
      });
      // debugger;
      filterTacosList(newList);
    }

    function addRecipeToTacos() {
      addTacos([...tacos, taco]);
      filterTacosList(tacos);
    }

    if (taco.hasOwnProperty("id") && prevTaco !== taco) {
      addRecipeToTacos();
    }

    if (ingredient !== prevIngredient || tacos.length !== prevTacos.length) {
      updateFilteredList();
    } //filter out recipes that do not include ingredient
  }, [
    tacos,
    prevTacos,
    taco,
    prevTaco,
    ingredient,
    prevIngredient,
    filteredList
  ]);

  if (!taco.hasOwnProperty("id")) {
    return (
      <Outer>
        <Img src={tacoImg} alt="Taco image meme" />
        <HeaderText>
          Everyone loves tacos! I love to cook and eat. It is a fundamental part
          of who I am. This app uses the TacoFacy API to help you find a delish
          taco recipe to inspire your next meal.
        </HeaderText>
        <Subtext>Click on the button to find a recipe.</Subtext>
        <Search onButtonClick={onButtonClick} loaded={loaded} />
      </Outer>
    ); // starting screen '/'
  }
  return (
    <Outer>
      <HeaderText>
        How do you feel about {taco.base_layer.name} tacos? Not your thing? Find
        another recipe or search your list for options.
      </HeaderText>
      <Main>
        <Taco taco={taco} match={match} />
        <SearchContainer>
          {tacos.length >= 1 && (
            <SearchParams
              tacos={tacos}
              ingredient={ingredient}
              updateIngredient={updateIngredient}
              onSubmitFilter={onSubmitFilter}
            />
          )}
          <Search onButtonClick={onButtonClick} loaded={loaded} />
        </SearchContainer>
      </Main>
      {filteredList.length >= 1 ? (
        <TacoList tacos={filteredList} deleteOnClick={deleteOnClick} />
      ) : null}
    </Outer>
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

const Img = styled.img`
  height: auto;
  width: 30%;
`;

const HeaderText = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  width: auto;
`;

const Subtext = styled.h3`
  font-size: 0.8rem;
  line-height: 1.2rem;
  width: auto;
`;

const Main = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  width: 90%;
  height: 100%;
  justify-content: center';
  margin-bottom: 4%;
`;

const SearchContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
`;

export default Home;
