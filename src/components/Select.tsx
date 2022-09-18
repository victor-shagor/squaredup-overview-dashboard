import React from "react";
import styled from "styled-components";
import { SelectProps } from "constants/interfaces";

const Select = (props: SelectProps) => {
  const { array, change } = props;
  return (
    <Styling>
      <select name="" id="" onChange={change}>
        {array &&
          array.map((res, index) => (
            <option key={index} value={res.value}>
              {res.name}
            </option>
          ))}
      </select>
    </Styling>
  );
};

export default Select;

const Styling = styled.div`
  select {
    border: 2px #0000000d solid;
    height: 32px;
    box-shadow: 0px 2px 3px #0000000d;
  }
`;
