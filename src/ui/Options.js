import React from "react";
import styled from "styled-components";

const Options = ({ searchParams }) => {
  return (
    <Params>
      {searchParams.length
        ? searchParams.map(recipe => <Option key={recipe}>{recipe}</Option>)
        : null}
    </Params>
  );
};
export default Options;

const Params = styled.ul`
  list-style: none;
  margin-left: 15px;
`;

const Option = styled.li`
  font-size: 0.9rem;
`;
