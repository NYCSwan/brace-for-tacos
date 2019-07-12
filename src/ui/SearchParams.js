import React, { useState, useEffect, useContext } from "react";
// import { mapValues, pick, filter, pullAll } from "lodash";
import styled from "styled-components";
import ThemeContext from "../utils/Context";
import usePrevious from "../utils/usePrevious";

const SearchParams = ({ tacos, ingredient, updateIngredient }) => {
  const [searchParams, updateParams] = useState([]);
  const [theme] = useContext(ThemeContext);
  const prevTacos = usePrevious(tacos);

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

    if (tacos && prevTacos !== tacos) {
      initialSearchParams();
    }
  }, [searchParams, tacos, prevTacos]);

  return (
    <Search>
      <p>
        This one not your thing? Find another one or search your list for
        options.
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          debugger;
          // updateList();
        }}
      >
        <label htmlFor="ingredient">
          Taco Layer
          <input
            id="ingredient"
            value={ingredient}
            placeholder="Add an ingredient"
            onChange={e => {
              updateIngredient(e.target.value);
            }}
            onBlur={e => {
              updateIngredient(e.target.value);
            }}
            disabled={!searchParams.length}
          />
          <Params>
            {searchParams.length
              ? searchParams.map(recipe => (
                  <Option key={recipe}>{recipe}</Option>
                ))
              : null}
          </Params>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
    </Search>
  );
};
const Search = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
`;
const Params = styled.ul`
  list-style: none;
`;

const Option = styled.li`
  font-size: 1rem;
`;

export default SearchParams;
