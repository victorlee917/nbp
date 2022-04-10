import React from "react";
import styled from "styled-components";
import HomeContainer from "./HomeContainer";
import { HTitle } from "./Utility";

const ContentsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 100px;
  bottom: 25%;
  @media screen and (max-width: 1000px) {
    left: 80px;
  }
  @media screen and (max-width: 700px) {
    left: 50px;
  }
  @media screen and (max-width: 500px) {
    left: 2.5%;
  }
`;

const SubTitle = styled.h2`
  margin-top: 5px;
  font-size: 18px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 340px) {
    font-size: 12px;
  }
`;

const Desc = styled.h3`
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.5;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (max-width: 340px) {
    font-size: 10px;
  }
`;

const HomeFirst = () => {
  return (
    <HomeContainer>
      <ContentsBox>
        <HTitle>출판전야 | 出版前夜</HTitle>
        <SubTitle>몽상가를 위한 은신처</SubTitle>
        <Desc>
          마침표를 찍기까지의 긴 밤<p></p>그 설레면서도 고된 밤에<p></p>
          출판전야가 함께 합니다.
        </Desc>
      </ContentsBox>
    </HomeContainer>
  );
};

export default HomeFirst;
