import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  overflow: hidden;
  width: calc(100vw - 100px);
  height: ${(props) => (props.home ? "100vh" : "auto")};
  justify-content: center;
  position: absolute;
  left: 100px;
  @media screen and (max-width: 500px), screen and (max-height: 550px) {
    left: 0px;
    top: 60px;
    width: 100vw;
    height: ${(props) => (props.home ? "calc(100vh - 60px)" : "auto")};
  }
`;

const Container = ({ children, home }) => {
  return (
    <Box className="hide-scrollbar" home={home}>
      {children}
    </Box>
  );
};

export default Container;
