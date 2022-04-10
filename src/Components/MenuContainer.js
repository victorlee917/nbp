import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: calc(100vw - 100px);
  padding: 5%;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const MenuContainer = ({ children }) => {
  return <Box className="dD">{children}</Box>;
};
export default MenuContainer;
