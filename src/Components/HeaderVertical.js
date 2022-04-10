import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../Asset/Image/logo.png";
import instagram from "../Asset/Image/instagram.png";
import { useLocation, useNavigate } from "react-router-dom";

const Box = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: space-between;
  z-index: 1000;
  background-color: rgba(19, 19, 19, 1);
  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-height: 550px) {
    display: none;
  }
`;

const Top = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const LogoBox = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 80%;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

const MenuBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  writing-mode: tb-rl;
  align-items: center;
  margin-bottom: 40px;
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  :last-child {
    margin-bottom: 0px;
  }
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  ::after {
    content: "";
    width: 1px;
    height: 30px;
    background-color: ${(props) =>
      props.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"};
    right: -15.5px;
    position: absolute;
  }
`;

const Bottom = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  &:hover > img {
    opacity: 1;
  }
`;

const Instagram = styled.img`
  transition: 0.3s ease-in-out;
  width: 35%;
  opacity: 0.5;
`;

const HeaderVertical = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const goToMenu = (path) => {
    navigate(`/${path}`);
  };
  const pathEdited = pathname.substr(1, pathname.length);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(pathEdited);
  }, [pathEdited]);

  return (
    <Box className="dD">
      <Top>
        <LogoBox onClick={() => goToMenu("")}>
          <Logo src={logo}></Logo>
        </LogoBox>
      </Top>
      <Middle>
        <MenuBox>
          <MenuItem
            key="0"
            onClick={() => goToMenu("log")}
            selected={"log" === currentPath}
          >
            기록
          </MenuItem>
          <MenuItem
            key="1"
            onClick={() => goToMenu("sentence")}
            selected={"sentence" === currentPath}
          >
            문장
          </MenuItem>
          <MenuItem
            key="2"
            onClick={() => goToMenu("music")}
            selected={"music" === currentPath}
          >
            작업곡
          </MenuItem>
        </MenuBox>
      </Middle>
      <Bottom
        href="https://www.instagram.com/night.before.publishing/"
        target="_blank"
      >
        <Instagram src={instagram}></Instagram>
      </Bottom>
    </Box>
  );
};

export default HeaderVertical;
