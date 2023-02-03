import React, { useRef, useContext } from "react";
import "../css/Project-page.css";
import OtherProjects from "../components/OtherProjects";
import { Paths } from "../constants";
import { motion } from "framer-motion";
import portfolio from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import roadbg from "../images/forest-road.jpg";
import teslacar2 from "../images/teslacar2.webp";
import { FaArrowRight } from "react-icons/fa";
import UseScroll from "../Reusables/UseScroll";
import { MouseContext } from ".././context/MouseContext";

const TeslaPage = (props) => {
  const constraintsRef = useRef(null);
  const [scrollYProgress, scaleX] = UseScroll();
  const { cursorChangeHandler } = useContext(MouseContext);

  const imgAlt = "tesla copy";

  return (
    <section id="tesla">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div
        className="main-img"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          type: "spring",
          bounce: 0.3,
        }}
        ref={constraintsRef}
        style={{
          backgroundImage: `url(${roadbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <motion.img
            drag="x"
            dragTransition={{ bounceStiffness: 40, bounceDamping: 5 }}
            dragMomentum={false}
            dragElastic={0.5}
            dragSnapToOrigin={true}
            dragConstraints={constraintsRef}
            src={teslacar2}
            alt={imgAlt}
          />
          <span>Drag the car to drive</span>
        </div>
      </motion.div>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <div className="summery-text-container">
          <div className="titles">
            <h1>Tesla Clone </h1>
            <a
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              href="https://tesla-clone-roimalka.netlify.app/"
            >
              <span>Click To View Site</span>
              <FaArrowRight size={14} className="icon-size" />
            </a>
          </div>
          <div className="text-block">
            <h3>TL;DR</h3>
            <p>
              A weather app built to show state management using redux and Api
              usage displaying dynamic weather data, while using clean
              transitions and proper moblie design.
            </p>
          </div>
          <div className="text-block">
            <h3>PROJECT SPECS</h3>
            <p>
              A project made while testing for a company.
              <br />
              Role // Everything
              <br />
              Year // created August, 2021
            </p>
          </div>
          <div className="text-block">
            <h3>BACKGROUND</h3>
            <p>
              At the beginning of my journey I wanted to further improve my
              abilities and skills as a Front-End developer, therefore I needed
              to start using API calls and having websites that manipulate data.
            </p>
          </div>
          <div className="text-block">
            <h3>THE GOAL</h3>
            <p>
              Help people around the world search and favourite any city they
              wish to.
            </p>
          </div>
        </div>
        <img src={portfolio} className="margin-top" alt={imgAlt} />
      </motion.div>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <h3 className="text-with-margin">Problem</h3>
        <p className="text-container-4">
          When I applied to the job and got the test, I had zero knowledge about
          redux and managing state on the front end.
          <br />
          Whilst only having a week to finish the test, I got ill in the middle
          of it, which did not help studying and finishing the test at all.
          <br />
          While learning about redux and state management I saw more problems
          and errors than any other project or assignment I've ever had.
        </p>
      </motion.div>
      <div className="content-divider" />
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <h3 className="text-with-margin">Approach - intense Learning</h3>
        <p className="text-container-4">
          Against all odds I set down for probably 10-13 hours every single day,
          managing to finish the test, using stuff like Redux and state
          management, utilizing different api requests, using postman to check
          them plus doing basic error handling.
        </p>

        <img src={portfolio2} className=" margin-both" alt={imgAlt} />
        <h3 className="text-with-margin">Result</h3>
        <p className="text-container-4">
          Even though I didn't get the job in the end, <br /> I learned so much
          from the test, which shows you can achieve cetain goals even if you're
          not going in the direction you thought you need to.
        </p>
      </motion.div>
      <div className="content-divider full-width" />
      <OtherProjects exclude={Paths.TESLA} />;
    </section>
  );
};

export default TeslaPage;
