import React, { useState, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../utils/Context";

function Search({ onButtonClick }) {
  const [loading, setLoading] = useState(false);

  const [theme] = useContext(ThemeContext);

  return (
    <div>
      <Button
        style={{ backgroundColor: theme }}
        disabled={loading}
        onClick={e => onButtonClick(e)}
      >
        Find a Recipe
      </Button>
    </div>
  );
}

const Button = styled.button`
  height: 40px;
  width: 100px;
`;

export default Search;
