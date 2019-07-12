import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import Taco from './Taco';

function Search() {
  const [taco, setTaco] = useState({ taco: {} });
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    // if (loading) return
    setLoading(true)
    console.log('click');
    const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
    debugger
    const taco = await result.json();
    setTaco(taco)
    setLoading(false)
  };
  //
  // useEffect(() => {
  //
  //   async function fetchTaco() {
  //     const result = await fetch("https://taco-randomizer.herokuapp.com/random/");
  //     const taco = await result.json();
  //     setTaco(taco)
  //   }
  //   fetchTaco();
  // }, [])

return (
    <div>
      <Button disabled={loading} onClick={() => handleClick()}>click</Button>
        {taco && <Taco />}

    </div>
  );
}

const Button = styled.button`
  height: 50px;
  width: 75px;
  background-color: blue;
`;

export default Search;
