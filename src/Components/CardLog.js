import React from "react";
import styled from "styled-components";
import { CDesc, CTitle, BD, CDate, OG } from "./Utility";
import CardContainer from "./CardContainer";

const TBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100%;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MBox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const CardLog = ({ img, title, desc, date, originName, originUrl }) => {
  return (
    <CardContainer>
      <TBox img={img}></TBox>
      <MBox>
        <CTitle>{title}</CTitle>
        <BD></BD>
        <CDesc>{desc}</CDesc>
        <CDate>{date}</CDate>
      </MBox>
      <OG url={originUrl}>{originName}</OG>
    </CardContainer>
  );
};

export default CardLog;
