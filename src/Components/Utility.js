import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  height: 10px;
`;

const BL = () => {
  return <Block></Block>;
};

const HomeTitle = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`;

const HTitle = ({ children }) => {
  return <HomeTitle>{children}</HomeTitle>;
};

const CardTitle = styled.h1`
  font-size: 15px;
  margin-bottom: 5px;
`;

const CTitle = ({ children }) => {
  return <CardTitle>{children}</CardTitle>;
};

const CardDesc = styled.h2`
  opacity: 0.5;
  line-height: 1.8;
  font-size: 13px;
`;

const CDesc = ({ children }) => {
  return <CardDesc>{children}</CardDesc>;
};

const Border = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  height: 1px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const BD = () => {
  return <Border></Border>;
};

const CardDate = styled.div`
  margin-top: 15px;
  font-size: 10px;
  opacity: 0.5;
`;

const CDate = ({ children }) => {
  return <CardDate>{children}</CardDate>;
};

const OriginBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

const Origin = styled.a`
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  transition: 0.3 ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const OG = ({ children, url }) => {
  return (
    <OriginBox>
      <Origin href={url} target="_blank">
        {children} >
      </Origin>
    </OriginBox>
  );
};

export { BL, HTitle, CTitle, CDesc, BD, CDate, OG };
