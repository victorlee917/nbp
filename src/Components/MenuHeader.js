import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.h2`
  margin-top: 5px;
  font-size: 18px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const MenuHeader = ({ title, subTitle }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Box>
  );
};

export default MenuHeader;
