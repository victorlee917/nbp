import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import HomeFirst from "../Components/HomeFirst";
import HomeSecond from "../Components/HomeSecond";
import HomeBackground from "../Components/HomeBackground";
import HomeArrows from "../Components/HomeArrows";
import bg from "../Asset/Image/bg.gif";

const HomeSlider = styled.div`
  overflow: hidden;
  display: flex;
  width: calc(200vw - 200px);
  height: 100vh;
  transition: 1s ease-in-out;
  position: absolute;
  @media screen and (max-width: 500px) {
    width: calc(200vw);
    height: calc(100vh - 60px);
  }
  @media screen and (max-height: 550px) {
    width: 100vw;
    height: calc(100vh - 60px);
  }
`;

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [size, setSize] = useState([0, 0]);
  const slideRef = useRef(null);
  useEffect(() => {
    if (size[0] > 500) {
      slideRef.current.style.left = slide === 0 ? `0px` : `calc(100px - 100vw)`;
    } else {
      slideRef.current.style.left = slide === 0 ? `0px` : `-100vw`;
    }
  }, [slide]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <Container home={true}>
      <HomeSlider ref={slideRef} bg={bg}>
        <HomeArrows slide={slide} setSlide={setSlide}></HomeArrows>
        <HomeBackground></HomeBackground>
        <HomeFirst key={0}></HomeFirst>
        {size[0] > 320 && size[1] > 550 ? (
          <HomeSecond key={1}></HomeSecond>
        ) : null}
      </HomeSlider>
    </Container>
  );
};

export default Home;
