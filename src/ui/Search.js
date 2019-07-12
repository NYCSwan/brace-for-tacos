import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../utils/Context";

function Search({ onButtonClick, loaded }) {
  const [theme] = useContext(ThemeContext);

  if (loaded) {
    return (
      <BtnContainerEnd>
        <Button
          disabled={false}
          style={{ backgroundColor: theme }}
          onClick={e => onButtonClick(e)}
        >
          Find a New Recipe
        </Button>
      </BtnContainerEnd>
    );
  }
  return (
    <BtnContainer>
      <Button
        disabled={false}
        style={{ backgroundColor: theme }}
        onClick={e => onButtonClick(e)}
      >
        Find a Recipe
      </Button>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  height: 40px;
  width: 110px;
`;

const BtnContainerEnd = styled.div`
  height: 40px;
  width: 110px;
  align-self: flex-end;
`;
const Button = styled.button`
  height: 40px;
  width: 100px;
`;

export default Search;
