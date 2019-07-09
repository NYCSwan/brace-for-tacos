import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Search from '../ui/Search'
import Taco from '../ui/Taco'

function Home() {
  const [tacos, setTacos] = useState({ tacos: [] });

  return (
    <Outer>
        <Header>Everyone loves tacos! I love to cook and eat. It's fundamental part of who I am. Click on the button to find a recipe.</Header>
        <Search />
      </Outer>
  );
}

const Outer = styled.div`
  height: 100%;
`;
const Header = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  width: 70%;
`;
export default Home;
