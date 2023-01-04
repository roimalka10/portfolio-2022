import React from "react";
import HomeGallery from "../components/HomeGallery";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateHome from "../components/Animate/AnimateHome";
import "../css/HomePage.css";
import UseLoading from "../Reusables/UseLoading";
import Footer from "../components/Footer";

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
            delay: 2.1,
          }}
        >
          <div className="bounce-icon">
            <BounceLoader color="#bfbfbf" />
          </div>
          <div className="loader-text">
            <motion.h5
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
              }}
            >
              Welcome
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
              }}
            >
              Home Page
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateHome>
          <HomeGallery projectRef={projectRef} />
          <Projects ref={projectRef} />
          <Footer />
        </AnimateHome>
      )}
    </>
  );
};

export default HomePage;
