import React from "react";
import styled from "styled-components";
import { OG, CDesc } from "./Utility";
import CardContainer from "./CardContainer";

const TBox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const CardSentence = ({ sentence, originType, originName, originUrl }) => {
  return (
    <CardContainer>
      <TBox>
        <CDesc>{sentence}</CDesc>
      </TBox>
      <OG url={originUrl}>
        {originType} | {originName}
      </OG>
    </CardContainer>
  );
};

export default CardSentence;
