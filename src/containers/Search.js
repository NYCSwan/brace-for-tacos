import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Taco from "../ui/Taco";
import SearchParams from "../ui/SearchParams";
import ThemeContext from "../utils/Context";

function Search({ onButtonClick }) {
  const [taco, setTaco] = useState({});
  const [loading, setLoading] = useState(false);
  const [tacos, addTacos] = useState([]);
  const [theme] = useContext(ThemeContext);
  //
  // async function onButtonClick() {
  //   console.log("click");
  //   if (loading) return;
  //   setLoading(true);
  //   const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
  //   const taco = await result.json();
  //   setTaco(taco);
  //   console.log("taco", taco);
  //   // console.log("tacos", tacos);
  //   setLoading(false);
  //
  //   return taco;
  // }
  //
  // useEffect(() => {
  //   function updateTacos() {
  //     const newTacos = tacos;
  //     // debugger;
  //     newTacos.push(taco);
  //     addTacos(newTacos);
  //   }
  //   if (taco.hasOwnProperty("mixin")) {
  //     updateTacos();
  //   }
  //   console.log("tacos", tacos);
  // }, [taco]);

  // <SearchParams />
  return (
    <div>
      <Button
        style={{ backgroundColor: theme }}
        disabled={loading}
        onClick={e => onButtonClick(e)}
      >
        click
      </Button>
    </div>
  );
}

const Button = styled.button`
  height: 50px;
  width: 75px;
`;

export default Search;
