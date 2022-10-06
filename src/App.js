import React, { useState, useEffect } from "react";
import "./css/main-styles.css";
import "./css/UpButton.css";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import HomeGallery from "./components/HomeGallery";
import Projects from "./components/Projects";
import NewsList from "./components/NewsList";
import ScrollToTop from "react-scroll-to-top";
import { ImArrowUp2 } from "react-icons/im";
import "./css/loader.css";
import { BounceLoader } from "react-spinners";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <motion.div
          className="loader"
          initial={{ y: "0vh" }}
          animate={{ y: "-150vh" }}
          transition={{
            duration: 0.6,
            delay: 1.2,
          }}
        >
          {" "}
          <motion.div className="loader-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="383.41"
              height="257.689"
              viewBox="0 0 383.41 257.689"
            >
              <path
                id="small"
                d="M118.15-250.5l-14.633-4.906A65.575,65.575,0,0,0,135.7-271.2a66.359,66.359,0,0,0,21.849-49.225A66.358,66.358,0,0,0,135.7-369.647a65.219,65.219,0,0,0-42.947-16.822l-74.172-.006v4.566h7.841v248.558H18.585v4.566H59.928v-4.566H52.094l.38-80.4a40.425,40.425,0,0,1,38.549-40.417l39.991,120.816H124.05v4.566h41.343v-4.566h-8.475ZM52.086-232.758V-381.909l40.644.006a39.689,39.689,0,0,1,25.855,10.232,40.453,40.453,0,0,1,13.307,29.4v43.659a40.473,40.473,0,0,1-13.308,29.435,39.638,39.638,0,0,1-25.9,10.406h-.091A44.785,44.785,0,0,0,52.086-232.758Zm160.218,99.4h-7.84v4.566H254.2l.126-4.469-1.637-.093a38.028,38.028,0,0,1-35.815-37.935V-369.05L291-128.787h25.872l-11.251-36.468,62.875-203.8v235.7h-7.841v4.566H402v-4.566h-7.842V-381.91H402v-4.566h-32.9L303.228-173,237.365-386.476h-32.9v4.566H212.3Z"
                transform="translate(-18.585 386.476)"
              />
            </svg>
          </motion.div>
          <div className="bounce-icon">
            <BounceLoader color="#bfbfbf" />
          </div>
          <div className="loader-text">
            <motion.h5
              initial={{ y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
                delay: 0,
              }}
            >
              Welcome
            </motion.h5>
            <motion.h1
              initial={{ y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
                delay: 0,
              }}
            >
              Wait a bit
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <div className="main-app">
          <Header />
          <ContactButton />
          <HomeGallery />
          <Projects />
          <NewsList />
          <ScrollToTop
            smooth
            className="up-button"
            component={<ImArrowUp2 />}
          />
        </div>
      )}
    </div>
  );
};

export default App;
