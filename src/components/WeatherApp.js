import React, { useRef } from "react";
import "../css/Project-page.css";
import OtherProjects from "../components/OtherProjects";
import { Paths } from "../constants";
import { motion } from "framer-motion";
import weatherNew from "../images/weathernew.png";
import weatherLogoNew from "../images/weather-logo-new.svg";

const WeatherApp = (props) => {
  const constraintsRef = useRef(null);
  const imgAlt = "weather app";

  return (
    <section id="weather-app">
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
      >
        <div>
          <motion.img
            drag
            dragTransition={{ bounceStiffness: 40, bounceDamping: 5 }}
            dragMomentum={false}
            dragElastic={0.5}
            dragSnapToOrigin={true}
            dragConstraints={constraintsRef}
            src={weatherLogoNew}
            alt={imgAlt}
          />
          <span>Drag the image to have fun</span>
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
            <h1>Weather App </h1>
            <h4>weather forecast site</h4>
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
        <img src={weatherNew} className="margin-top" alt={imgAlt} />
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          voluptas pariatur! Eligendi adipisci maiores aut recusandae
        </p>
        <ul className="margin-down text-container-4">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, voluptas pariatur! Eligendi adipisci maiores aut
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, voluptas
          </li>
        </ul>
        <p className="text-container-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          voluptas pariatur! Eligendi adipisci maiores aut recusandae voluptate
          ipsum numquam quia? Totam quisquam blanditiis, voluptatem ipsa quas
          repellat eos. Ullam, consequuntur! Lorem ipsum, dolor sit amet
          consectetur
        </p>
        <p>This led to two main pain points:</p>
        <ul className="text-container-4">
          <li>
            <span className="bold-text">On the user end:</span> Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Blanditiis, voluptas
            pariatur! Eligendi adipisci maiores aut recusandae voluptate ipsum
            numquam quia?
          </li>
          <li>
            <span className="bold-text">On the business end:</span> Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Blanditiis, voluptas
            pariatur! Eligendi adipisci maiores
          </li>
        </ul>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          voluptas pariatur! Eligendi adipisci maiores aut recusandae voluptate
          ipsum numquam quia? Totam quisquam blanditiis, voluptatem ipsa quas
          repellat eos. Ullam, consequuntur! Lorem ipsum, dolor sit amet
          consectetur
        </p>

        <img src={weatherNew} className=" margin-both" alt={imgAlt} />
        <h3 className="text-with-margin">Result</h3>
        <p className="text-container-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          voluptas pariatur! Eligendi adipisci maiores aut recusandae voluptate
          ipsum numquam quia? Totam quisquam blanditiis, voluptatem ipsa quas
          repellat eos. Ullam, consequuntur! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Minima dolor adipisci quo voluptas velit
          eos voluptate nemo amet impedit odit perferendis sed asperiores quasi
          quas facilis itaque id, ullam nobis!
        </p>
      </motion.div>
      <div className="content-divider full-width" />
      <OtherProjects exclude={Paths.WEATHER} />;
    </section>
  );
};

export default WeatherApp;
