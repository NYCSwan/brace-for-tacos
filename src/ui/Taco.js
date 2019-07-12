import React, {useState} from 'react';

function Taco() {
  const [taco, setTaco] = useState({ taco: {} });

  return (
  <div>
    <p>{JSON.stringify(taco)}</p>
  </div>
  );
}

export default Taco;
