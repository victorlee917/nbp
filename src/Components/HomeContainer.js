import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
  width: calc(100vw - 100px);
  z-index: 500;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-height: 550px) {
    width: 100vw;
  }
`;

const HomeContainer = ({ children }) => {
  return <Box className="dD">{children}</Box>;
};

export default HomeContainer;
