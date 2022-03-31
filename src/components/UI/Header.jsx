import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>ToDo App</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  background-color: #303f9f;
  color: #ffffff;
  padding: 10px 0;

  h1 {
    margin: 0;
  }
`;

export default Header;
