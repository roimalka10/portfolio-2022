import React, { useRef, useState } from "react";
import "./css/main-styles.css";
import "./css/UpButton.css";
import ContactButton from "./components/ContactButton";
import ScrollToTop from "react-scroll-to-top";
import { ImArrowUp2 } from "react-icons/im";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import ProjectsTemplate from "./containers/ProjectsTemplate";
import ContentTemplate from "./containers/ContentTemplate";
import About from "./components/About";
import WeatherApp from "./components/WeatherApp";
import Portfolio2021 from "./components/Portfolio2021";
import { Route, Routes, useLocation } from "react-router";
import { Paths } from "./constants";
import { getSubPath, getRootPath } from "./utils";
import ScrollToTopRoute from "./Reusables/ScrollToTopRoute";
import TeslaPage from "./components/TeslaPage";
import Cursor from "./components/CursorFeatures/Cursor";

const App = () => {
  const location = useLocation();
  window.addEventListener("resize", appHeight);
  var doc = document.documentElement;

  var appHeight = function () {
    doc.style.setProperty("--app-height", "".concat(window.innerHeight, "px"));
  };

  var currentUserAgent = navigator.userAgent;
  if (currentUserAgent.includes("Chrome")) {
    doc.classList.add("chromeBrowser");
  } else if (currentUserAgent.includes("Safari")) {
    doc.classList.add("safariBrowser");
  } else if (currentUserAgent.includes("SamsungBrowser")) {
    doc.classList.add("SamsungBrowser");
  } else if (/iPad|iPhone|iPod/.test(currentUserAgent)) {
    doc.classList.add("iphoneBrowser");
  }

  appHeight();
  const projectRef = useRef(null);

  return (
    <div className="App light">
      <Cursor />
      <ContactButton />
      <AnimatePresence mode="wait">
        <ScrollToTopRoute />
        <Routes key={location.pathname} location={location}>
          <Route path="" element={<ContentTemplate />}>
            <Route
              path={getRootPath()}
              element={<HomePage projectRef={projectRef} exact />}
            />
            <Route
              path={getSubPath(Paths.ABOUT)}
              element={<About projectRef={projectRef} exact />}
            />
          </Route>
          <Route path="" element={<ProjectsTemplate />}>
            <Route
              path={getSubPath(Paths.WEATHER)}
              element={<WeatherApp projectRef={projectRef} exact />}
            />
            <Route
              path={getSubPath(Paths.PORTFOLIO2021)}
              element={<Portfolio2021 projectRef={projectRef} exact />}
            />
            <Route
              path={getSubPath(Paths.TESLA)}
              element={<TeslaPage projectRef={projectRef} exact />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
      <ScrollToTop smooth className="up-button" component={<ImArrowUp2 />} />
    </div>
  );
};

export default App;
