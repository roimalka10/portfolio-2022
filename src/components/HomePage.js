import React from "react";
import HomeGallery from "./HomeGallery";
import Projects from "./Projects";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateTop from "./Animate/AnimateTop";
import "../css/HomePage.css";
import UseLoading from "../Reusables/UseLoading";

const HomePage = ({ projectRef }) => {
  const [loading] = UseLoading();
  return (
    <>
      {loading ? (
        <motion.div
          className="home-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.2,
          }}
        >
          <div className="bounce-icon">
            <BounceLoader color="#bfbfbf" />
          </div>
          <div className="loader-text">
            <motion.h5
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Welcome
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Home Page
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <>
          <HomeGallery projectRef={projectRef} />
          <Projects ref={projectRef} />
        </>
      )}
    </>
  );
};

export default HomePage;
