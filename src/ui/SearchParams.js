import React, { useState, useEffect, useContext } from "react";
import { dropWhile } from "lodash";
import styled from "styled-components";
import ThemeContext from "../utils/Context";
import usePrevious from "../utils/usePrevious";
import Options from "./Options";

const SearchParams = ({
  tacos,
  ingredient,
  onSubmitFilter,
  updateIngredient
}) => {
  const [searchParams, updateParams] = useState([]);
  const [theme] = useContext(ThemeContext);
  const prevTacos = usePrevious(tacos);
  const prevIngredient = usePrevious(ingredient);

  function updateSearchParams() {
    const newParams = dropWhile(searchParams, option => {
      return !option.toLowerCase().includes(ingredient.toLowerCase());
    });
    updateParams(newParams);
  } //compare to searchParams, return only matching results

  useEffect(() => {
    function initialSearchParams() {
      let names = [];
      tacos.forEach(taco => {
        names.push(
          taco.base_layer.name,
          taco.mixin.name,
          taco.seasoning.name,
          taco.shell.name,
          taco.condiment.name
        );
        return names;
      });
      updateParams(names);
    }

    if (
      (tacos && !searchParams.length) ||
      tacos.length > prevTacos.length ||
      tacos.length < prevTacos.length
    ) {
      initialSearchParams();
    }

    if (tacos && searchParams.length && tacos.length !== prevTacos.length) {
      debugger;

      initialSearchParams();
      // updateSearchParams();
    }

    // if (ingredient !== prevIngredient) {
    //   updateSearchParams();
    // }
  }, [searchParams, tacos, prevTacos, ingredient, prevIngredient]);

  return (
    <Search>
      <Form onSubmit={onSubmitFilter}>
        <Label htmlFor="ingredient">
          Taco Layer
          <Input
            id="ingredient"
            value={ingredient}
            placeholder="Add an ingredient"
            onChange={e => {
              updateIngredient(e.target.value);
              updateSearchParams(e.target.value);
            }}
            onBlur={e => {
              updateIngredient(e.target.value);
              updateSearchParams(e.target.value);
            }}
            disabled={!searchParams.length}
          />
          <Options
            searchParams={searchParams}
            display={ingredient.length >= 1}
          />
        </Label>
        <Button style={{ backgroundColor: theme }}>Submit</Button>
      </Form>
    </Search>
  );
};
const Search = styled.div`
  padding-top: 3%;
  height: 100%;
  width: auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.9rem;
  text-align: left;
  width: auto;
`;

const Input = styled.input`
  font-size: 0.9rem;
  text-align: center;
  margin-left: 15px;
  width: auto;
  height: auto;
  word-break: keep-all;
`;
const Button = styled.button`
  height: 40px;
  width: 100px;
  align-self: center;
`;

export default SearchParams;
