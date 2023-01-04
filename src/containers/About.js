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
        <motion.div
          className="about-loader"
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
              About Me
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -40 }}
              transition={{
                duration: 0.35,
              }}
            >
              Front-End Developer
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateAbout>
          <h1>ABOUT PAGE TESTING</h1>
          <Link to="/">Home</Link>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ipsum natus error consequatur debitis impedit doloribus quia nam hic
            architecto officia quos accusantium, amet quaerat id, rem delectus
            non est! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore delectus, repudiandae eos saepe quasi fugit in laboriosam
            facilis doloribus corporis provident qui voluptates necessitatibus
            nam consequatur iste illo quis pariatur. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officia maiores cum aliquam, culpa
            facilis corporis, neque eius ipsa placeat distinctio modi quos
            tenetur praesentium ad aspernatur! Adipisci, porro. Animi, minus.
          </h1>
          <Footer />
        </AnimateAbout>
      )}
    </>
  );
};

export default About;
