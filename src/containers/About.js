import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateFav from "../components/Animate/AnimateFav";
import "../css/About.css";
import UseLoading from "../Reusables/UseLoading";

const About = () => {
  const [loading] = UseLoading();

  return (
    <>
      {loading ? (
        <motion.div className="fav-loader">
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
        <AnimateFav>
          <h1>Page A</h1>
          <Link to="/">Home</Link>
          <h1>HELLO BITCH ASS BITCH</h1>
        </AnimateFav>
      )}
    </>
  );
};

export default About;
