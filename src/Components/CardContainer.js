import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(19, 19, 19, 1);
`;

const CardContainer = ({ children }) => {
  return <Box>{children}</Box>;
};

export default CardContainer;
