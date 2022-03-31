import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder ?? ""}
      value={props.value ?? ""}
      aria-label={props.ariaLabel ?? ""}
      onChange={props.onChange}
      required={props.required}
    />
  );
};

const StyledInput = styled.input`
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #bdbdbd;
`;

export default Input;
