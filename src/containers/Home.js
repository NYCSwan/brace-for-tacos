import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import TacoList from "../ui/TacoList";
import usePrevious from "../utils/usePrevious";

function Home() {
  const [loading, setLoading] = useState(false);
  const [tacos, addTacos] = useState([]);
  const [taco, setTaco] = useState({});
  const prevTaco = usePrevious(taco);

  async function onButtonClick() {
    console.log("click");
    if (loading) return;
    setLoading(true);
    const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
    const taco = await result.json();
    setTaco(taco);
    console.log("taco", taco);
    // console.log("tacos", tacos);
    setLoading(false);

    return taco;
  }

  useEffect(() => {
    function updateTacos() {
      addTacos([...tacos, taco]);
    }
    // debugger;
    if (taco.hasOwnProperty("mixin") && prevTaco !== taco) {
      updateTacos();
    }
  }, [tacos, taco, prevTaco]);

  return (
    <Outer>
      <Header>
        Everyone loves tacos! I love to cook and eat. It is a fundamental part
        of who I am. Click on the button to find a recipe.
      </Header>
      <Search onButtonClick={onButtonClick} />
      {tacos.length >= 1 && <TacoList tacos={tacos} />}
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

const Header = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  width: 70%;
`;
export default Home;
