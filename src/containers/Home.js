import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Search from '../ui/Search'
import Taco from '../ui/Taco'

function Home() {
  const [data, setData] = useState({ tacos: [] });
const [loading, setLoading] = useState(true);
  return (
    <Outer>
        <p>Everyone loves tacos! I love to cook and eat. It's fundamental part of who I am. Click on the button to find a recipe.</p>
        <Search />
        {data.length > 1 && <Taco />}
      </Outer>
  );
}

const Outer = styled.div`
  height: 100%;
`;

export default Home;
