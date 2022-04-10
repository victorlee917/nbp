import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HeaderVertical from "./HeaderVertical";
import Home from "../Routes/Home";
import Menu from "../Routes/Menu";
import HeaderHorizontal from "./HeaderHorizontal";

// import Fail from "./Fail";

const Router = () => {
  return (
    <>
      <HashRouter>
        <HeaderVertical></HeaderVertical>
        <HeaderHorizontal></HeaderHorizontal>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/log" element={<Menu></Menu>} />
          <Route path="/sentence" element={<Menu></Menu>} />
          <Route path="/music" element={<Menu></Menu>} />
          {/* <Route path="/*" element={<Fail></Fail>} /> */}
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;
