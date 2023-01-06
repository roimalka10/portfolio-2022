import React from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateLeft from "../components/Animate/AnimateLeft";
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
            delay: 2,
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
        <AnimateLeft>
          <>
            <section className="about-text">
              <div className="wrapper">
                <motion.h5
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                  }}
                >
                  a few words about me
                </motion.h5>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                  }}
                >
                  I’m Roi Malka, a Front-End Developer who focuses on showing my
                  skills visually, through enjoyable and meaningful experiences.
                  I specialize in responsive websites and extraordinary
                  animations.
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.3,
                  }}
                >
                  Over the past 2 years I have been trying to hone my skills,
                  creating websites using beautiful animations, transitions and
                  proper UX&UI approach for clients and myself. In my spare time
                  I enjoy football and reading.
                </motion.h3>
              </div>
            </section>
            <motion.section
              className="about-skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.6,
              }}
            >
              <div className="wrapper">
                <div className="soft-skills">
                  <h5>Skills</h5>
                  <h3>
                    UX&UI<em> / </em>
                    Animations<em> / </em>
                    Infinite Curiousity<em> / </em>
                    Attention To Details<em> / </em>
                    Pixel Perfect Precision
                  </h3>
                </div>
                <div className="technologies">
                  <h5>Technologies</h5>
                  <h3>
                    HTML<em> / </em>
                    CSS<em> / </em>
                    JavaScript<em> / </em>
                    React<em> / </em>
                    jQuery<em> / </em>
                    Git<em> / </em>
                    GSAP<em> / </em>
                    Framer Motion<em> / </em>
                    Redux<em> / </em>
                    Sass
                  </h3>
                </div>
              </div>
            </motion.section>
            <section className="contact">
              <div className="wrapper">
                <div className="contact-headline">
                  <div>
                    <h5>Contact</h5>
                    <h1>Get in touch - let's work together.</h1>
                  </div>
                </div>
                <div className="contact-form"></div>
              </div>
            </section>
          </>
          <Footer />
        </AnimateLeft>
      )}
    </>
  );
};

export default About;
