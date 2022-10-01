import React from "react";
import "../css/HomeGallery.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../images/logo.svg";

const HomeGallery = () => {
  return (
    <>
      <section className="home-gallery" name="home-id">
        <motion.div
          className="name-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <img src={logo} />
        </motion.div>
        <div className="wrapper">
          <div className="home-row">
            <div className="home-main">
              <motion.h5
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1,
                }}
              >
                Roi Malka
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.3,
                }}
              >
                JavaScript and React Front-End developer
              </motion.h1>
              <motion.h3
                className="home-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.6,
                }}
              >
                A Front-End developer with industry experience building websites
                and web pages. Pixel Perfect Precision and a can-do approach is
                what I always try to achieve.
              </motion.h3>
              <motion.nav
                className="links"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.9,
                }}
              >
                <motion.h4 className="links-btn">
                  <Link
                    className="btn"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={20}
                  >
                    View Projects
                  </Link>
                </motion.h4>
                <span>or</span>
                <motion.h4 className="links-btn">
                  <Link
                    className="btn"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={20}
                    href="#"
                  >
                    Read About Me
                  </Link>
                </motion.h4>
              </motion.nav>
            </div>
          </div>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <motion.a
              className="scroll-to"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 2.1,
              }}
            >
              <div className="scroll-to-icon"></div>
            </motion.a>
          </Link>
        </div>
        <motion.ul
          className="icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <li>
            <a href="https://github.com/roimalka10" target="_blank">
              <FaGithub size={70} className="icon-size" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
              <FaLinkedinIn size={70} className="icon-size" />
            </a>
          </li>
        </motion.ul>
      </section>
    </>
  );
};

export default HomeGallery;
