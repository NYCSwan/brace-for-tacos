import React from "react";
import styled from "styled-components";

const Options = ({ searchParams, display }) => {
  return (
    <Params>
      {display && searchParams.length
        ? searchParams.map(recipe => <Option key={recipe}>{recipe}</Option>)
        : null}
    </Params>
  );
};
export default Options;

const Params = styled.ul`
  list-style: none;
  margin-left: 25px;
  z-index: 10;
  border-bottom: 2px solid green;
  border-left: 2px solid green;
  border-right: 2px solid green;
`;

const Option = styled.li`
  font-size: 0.9rem;
  border-bottom: 1px solid grey;
`;
