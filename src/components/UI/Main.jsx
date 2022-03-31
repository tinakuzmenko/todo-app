import React from "react";
import styled from "styled-components";

const Main = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

const Container = styled.div`
  max-width: 960px;
  padding: 30px;
  margin: 0 auto;
`;

export default Main;
