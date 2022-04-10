import React from "react";
import styled from "styled-components";
import logo from "../Asset/Image/logo_full.png";
import menu from "../Asset/Image/menu.png";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  padding-right: 5%;
  padding-left: 5%;
  height: 60px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  background-color: rgba(19, 19, 19, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
  }
  @media screen and (max-height: 550px) {
    display: flex;
  }
`;

const ImageBox = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 40px;
`;

const Menu = styled.img`
  width: 20px;
  opacity: 0.7;
`;

const HeaderHorizontal = () => {
  const navigate = useNavigate();
  const goToMenu = (path) => {
    navigate(`/${path}`);
  };
  return (
    <Box>
      <ImageBox onClick={() => goToMenu("")}>
        <Logo src={logo}></Logo>
      </ImageBox>
      <ImageBox>
        <Menu src={menu}></Menu>
      </ImageBox>
    </Box>
  );
};

export default HeaderHorizontal;
