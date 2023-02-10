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
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="256"
            height="256"
            viewBox="0 0 64 64"
          >
            <linearGradient
              id="NbVYP66EYa3dqrkjGH2WEa_AfKjaTf3oXZY_gr1"
              x1="32.005"
              x2="32.005"
              y1="12.001"
              y2="54.725"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#6dc7ff"></stop>
              <stop offset="1" stop-color="#e6abff"></stop>
            </linearGradient>
            <path
              fill="url(#NbVYP66EYa3dqrkjGH2WEa_AfKjaTf3oXZY_gr1)"
              d="M24.838,17.051l-0.775-0.049c0,0-0.419-0.026-1.071-0.026c-2.876,0-6.54,0.459-7.664,2.647	c-3.379-1.39-5.177-3.812-5.95-5.129c2.037-0.711,8.001-2.441,19.116-2.493L32,16.667l3.497-4.664	c11.125,0.05,17.089,1.78,19.137,2.521c-0.784,1.287-2.582,3.709-5.927,5.139c-1.158-2.229-4.822-2.688-7.698-2.688	c-0.652,0-1.071,0.026-1.071,0.026l-0.774,0.049L32,54.725L24.838,17.051z"
            ></path>
            <linearGradient
              id="NbVYP66EYa3dqrkjGH2WEb_AfKjaTf3oXZY_gr2"
              x1="32"
              x2="32"
              y1="-3.293"
              y2="59.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#1a6dff"></stop>
              <stop offset="1" stop-color="#c822ff"></stop>
            </linearGradient>
            <path
              fill="url(#NbVYP66EYa3dqrkjGH2WEb_AfKjaTf3oXZY_gr2)"
              d="M57.94,9.283c0.297,0.108,0.417,0.456,0.254,0.726l-0.979,1.632	c-0.123,0.205-0.368,0.295-0.593,0.215C54.953,11.258,47.616,9,32,9S9.047,11.258,7.378,11.856c-0.225,0.081-0.47-0.01-0.593-0.215	l-0.979-1.632C5.643,9.739,5.764,9.391,6.06,9.283C8.166,8.519,16.304,6,32,6S55.834,8.519,57.94,9.283z M36.297,12.604h0.005	H36.297 M28.003,13.005c-8.917,0.082-14.36,1.255-17.047,2.052c0.809,1.067,2.092,2.371,3.992,3.342	c1.349-1.609,4.047-2.423,8.042-2.423c0.658,0,1.088,0.026,1.134,0.029c0.912,0.057,1.669,0.725,1.84,1.623L32,49.371l6.035-31.744	c0.171-0.898,0.928-1.566,1.84-1.623c0.047-0.003,0.476-0.029,1.134-0.029c3.995,0,6.693,0.814,8.042,2.423	c1.9-0.971,3.182-2.275,3.992-3.342c-2.687-0.797-8.128-1.97-17.047-2.052L33.6,16.2C33.222,16.704,32.63,17,32,17	s-1.222-0.296-1.6-0.8L28.003,13.005 M35.507,11.001c0.001,0,0.003,0,0.005,0c11.161,0.051,17.219,1.771,19.463,2.582	c0.579,0.209,0.822,0.887,0.511,1.417c-0.838,1.426-2.778,4.04-6.385,5.582c-0.128,0.055-0.261,0.081-0.391,0.081	c-0.379,0-0.739-0.22-0.926-0.583c-0.963-1.874-4.895-2.105-6.774-2.105C40.395,17.975,40,18,40,18l-7.51,39.5	c-0.054,0.268-0.272,0.402-0.49,0.402s-0.437-0.134-0.49-0.402L24,18c0,0-0.395-0.025-1.01-0.025c-1.879,0-5.811,0.231-6.774,2.105	c-0.186,0.363-0.546,0.583-0.926,0.583c-0.13,0-0.262-0.026-0.391-0.081c-3.607-1.542-5.547-4.156-6.385-5.582	c-0.312-0.53-0.068-1.208,0.511-1.417c2.244-0.812,8.302-2.531,19.463-2.582c0.002,0,0.003,0,0.005,0c0.316,0,0.621,0.15,0.81,0.402	L32,15l2.697-3.596C34.887,11.151,35.192,11.001,35.507,11.001L35.507,11.001z M36.297,12.604h0.005H36.297 M28.003,13.005	c-8.917,0.082-14.36,1.255-17.047,2.052c0.809,1.067,2.092,2.371,3.992,3.342c1.349-1.609,4.047-2.423,8.042-2.423	c0.658,0,1.088,0.026,1.134,0.029c0.912,0.057,1.669,0.725,1.84,1.623L32,49.371l6.035-31.744c0.171-0.898,0.928-1.566,1.84-1.623	c0.047-0.003,0.476-0.029,1.134-0.029c3.995,0,6.693,0.814,8.042,2.423c1.9-0.971,3.182-2.275,3.992-3.342	c-2.687-0.797-8.128-1.97-17.047-2.052L33.6,16.2c-0.378,0.504-0.97,1.3-1.6,1.3s-1.222-0.796-1.6-1.3L28.003,13.005 M35.507,11.001	c0.001,0,0.003,0,0.005,0c11.161,0.051,17.219,1.771,19.463,2.582c0.579,0.209,0.822,0.887,0.511,1.417	c-0.838,1.426-2.778,4.04-6.385,5.582c-0.128,0.055-0.261,0.081-0.391,0.081c-0.379,0-0.739-0.22-0.926-0.583	c-0.963-1.874-4.895-2.105-6.774-2.105C40.395,17.975,40,18,40,18l-7.51,39.5c-0.054,0.268-0.272,0.402-0.49,0.402	s-0.437-0.134-0.49-0.402L24,18c0,0-0.395-0.025-1.01-0.025c-1.879,0-5.811,0.231-6.774,2.105c-0.186,0.363-0.546,0.583-0.926,0.583	c-0.13,0-0.262-0.026-0.391-0.081c-3.607-1.542-5.547-4.156-6.385-5.582c-0.312-0.53-0.068-1.208,0.511-1.417	c2.244-0.812,8.302-2.531,19.463-2.582c0.002,0,0.003,0,0.005,0c0.316,0,0.621,0.15,0.81,0.402L32,15l2.697-3.596	C34.887,11.151,35.192,11.001,35.507,11.001L35.507,11.001z"
            ></path>
          </svg>
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
      <OtherProjects exclude={Paths.TESLA} />
    </section>
  );
};

export default TeslaPage;
