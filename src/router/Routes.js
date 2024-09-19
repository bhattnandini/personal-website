import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes3 = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          {/* <Route path="/home-light" element={<HomeLight />} /> */}
          <Route path="/home-dark" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </Router>
    </>
  );
};

export default Routes3;
