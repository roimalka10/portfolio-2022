import React, { useRef } from "react";
import "./css/main-styles.css";
import "./css/UpButton.css";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import ScrollToTop from "react-scroll-to-top";
import { ImArrowUp2 } from "react-icons/im";
import { AnimatePresence } from "framer-motion";
import HomePage from "./containers/HomePage";
import About from "./containers/About";
import { Route, Routes, useLocation } from "react-router";
import ScrollToTopRoute from "./Reusables/ScrollToTopRoute";

const App = () => {
  const location = useLocation();
  window.addEventListener("resize", appHeight);

  var appHeight = function () {
    var doc = document.documentElement;
    doc.style.setProperty("--app-height", "".concat(window.innerHeight, "px"));
  };

  appHeight();
  const projectRef = useRef(null);

  return (
    <div className="App">
      <div className="main-app">
        <Header projectRef={projectRef} />
        <ContactButton />
        <AnimatePresence exitBeforeEnter>
          <ScrollToTopRoute />
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage projectRef={projectRef} />} />
            <Route path="/about" element={<About projectRef={projectRef} />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTop smooth className="up-button" component={<ImArrowUp2 />} />
      </div>
    </div>
  );
};

export default App;
