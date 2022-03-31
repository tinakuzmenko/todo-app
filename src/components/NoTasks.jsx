import React from "react";
import styled from "styled-components";

const NoTasks = () => {
  return (
    <StyledParagraph>
      You don't have any tasks. Create a new one!
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  text-align: center;
`;

export default NoTasks;
