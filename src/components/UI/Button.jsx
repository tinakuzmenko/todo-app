import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "#303f9f" : "transparent"};
  border: 1px solid
    ${(props) => (props.variant === "primary" ? "#303f9f" : "transparent")};
  color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#303f9f")};
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#3f51b5" : "#c5cae9"};
  }
`;

export default Button;
