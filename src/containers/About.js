import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateAbout from "../components/Animate/AnimateAbout";
import "../css/About.css";
import UseLoading from "../Reusables/UseLoading";
import Footer from "../components/Footer";

const About = () => {
  const [loading] = UseLoading();

  return (
    <>
      {loading ? (
        <motion.div className="about-loader">
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
              About Me
            </motion.h5>
            <motion.h1
              initial={{ y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
                delay: 0,
              }}
            >
              Front-End Developer
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateAbout>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO THIS IS ABOUT PAGE</h1>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO THIS IS ABOUT PAGE</h1>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO THIS IS ABOUT PAGE</h1>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO THIS IS ABOUT PAGE</h1>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO THIS IS ABOUT PAGE</h1>
          <Footer />
        </AnimateAbout>
      )}
    </>
  );
};

export default About;
