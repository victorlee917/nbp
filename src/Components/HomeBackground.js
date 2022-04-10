import React from "react";
import styled from "styled-components";
import bg from "../Asset/Image/bg.gif";

const BgImg = styled.div`
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  position: absolute;
  background: ${(props) =>
    `rgba(19,19,19,1) url(${props.bg}) no-repeat center center`};
  background-size: cover;
  @media screen and (max-width: 500px) {
    height: calc(100vh - 60px);
  }
`;

const BgColor = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  background-color: rgba(19, 19, 19, 0.5);
  z-index: 100;
`;

const HomeBackground = () => {
  return (
    <>
      <BgImg bg={bg}></BgImg>
      <BgColor></BgColor>
    </>
  );
};

export default HomeBackground;
