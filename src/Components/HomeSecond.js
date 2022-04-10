import React from "react";
import styled from "styled-components";
import HomeContainer from "./HomeContainer";
import { HTitle } from "./Utility";

const ContentsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 100px;
  top: 100px;
  text-align: right;
  @media screen and (max-width: 1000px) {
    right: 80px;
    top: 80px;
  }
  @media screen and (max-width: 700px) {
    right: 50px;
    top: 50px;
  }
  @media screen and (max-width: 500px) {
    right: 2.5%;
    top: 5%;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

const Author = styled.div`
  margin-top: 12px;
  opacity: 0.7;
  text-align: right;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const HomeSecond = () => {
  return (
    <HomeContainer>
      <ContentsBox>
        <HTitle>
          집이란 몽상의 보금자리요,<p></p>
          몽상가의 은신처이며,<p></p>
          평화롭게 꿈꿀 수 있도록 돕는 공간이다.
        </HTitle>
        <Author>가스통 바슐라르</Author>
      </ContentsBox>
    </HomeContainer>
  );
};

export default HomeSecond;
