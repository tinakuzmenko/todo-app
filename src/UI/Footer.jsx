import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Designed & developed by Tina Kuzmenko, {new Date().getFullYear()}.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #c5cae9;
`;

export default Footer;
