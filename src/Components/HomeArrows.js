import React from "react";
import styled from "styled-components";
import right from "../Asset/Image/right.png";
import left from "../Asset/Image/left.png";

const Box = styled.div`
  position: fixed;
  display: flex;
  bottom: 15%;
  left: 200px;
  z-index: 1000;
  @media screen and (max-width: 1000px) {
    left: 180px;
  }
  @media screen and (max-width: 700px) {
    left: 150px;
  }
  @media screen and (max-width: 500px) {
    left: 5%;
    bottom: 10%;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
  @media screen and (max-height: 550px) {
    display: none;
  }
`;

const ArrowBox = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }
  &:hover > img {
    opacity: 1;
  }
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
`;

const ArrowIcon = styled.img`
  width: 60%;
  transition: 0.3s ease-in-out;
  opacity: 0.5;
`;

const HomeArrows = ({ slide, setSlide }) => {
  const changeStep = () => {
    if (slide === 0) {
      setSlide(1);
    } else {
      setSlide(0);
    }
  };
  return (
    <Box className="dD">
      <ArrowBox onClick={changeStep}>
        <ArrowIcon src={slide === 0 ? right : left}></ArrowIcon>
      </ArrowBox>
    </Box>
  );
};

export default HomeArrows;
