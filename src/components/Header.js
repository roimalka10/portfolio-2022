import React, { useState, useEffect } from "react";
import "../css/header.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import resume from "../images/roimalkaCV-2.pdf";

import logo from "../images/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      className="header"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, type: "tween" }}
    >
      <Link
        activeClass="active"
        to="home-gallery"
        spy={true}
        smooth={true}
        duration={0}
        className="logo"
      >
        <img src={logo} />
      </Link>
      <motion.div
        onClick={handleClick}
        className={showMenu ? "menu active" : "menu"}
      >
        <motion.a
          whileTap={{ scale: 0.8 }}
          activeClass="active"
          to="home-gallery"
          spy={true}
          smooth={true}
          duration={0}
          onClick={handleClick}
        >
          <span>Home</span>
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={0}
          offset={20}
          onClick={handleClick}
        >
          <span>Projects</span>
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.8 }}
          activeClass="active"
          className="span-contact"
          href="#contact"
        >
          <span>About</span>
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          activeClass="active"
          className="span-resume"
          href={resume}
          download
        >
          <span>Resume</span>
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href="https://github.com/roimalka10"
          target="_blank"
        >
          <span> Github</span>
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href="https://www.linkedin.com/in/roi-malka/"
          target="_blank"
        >
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>
      <div
        onClick={handleClick}
        className={showMenu ? "hamburger open" : "hamburger"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </motion.div>
  );
};

export default Header;
