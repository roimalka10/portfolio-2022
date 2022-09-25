import React, { useState, useEffect } from "react";
import "../css/header.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resume from "../images/roimalka2022.pdf";

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
        <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />{" "}
      </Link>
      <div className={showMenu ? "menu active" : "menu"}>
        <Link
          activeClass="active"
          to="home-gallery"
          spy={true}
          smooth={true}
          duration={0}
          onClick={handleClick}
        >
          <span>Home</span>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={0}
          offset={20}
          onClick={handleClick}
        >
          <span>Projects</span>
        </Link>

        <a activeClass="active" className="span-contact" href="#contact">
          <span>About</span>
        </a>
        <a activeClass="active" className="span-resume" href={resume} download>
          <span>Resume</span>
        </a>
        <a href="https://github.com/roimalka10" target="_blank">
          <span> Github</span>
        </a>
        <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
          <span>LinkedIn</span>
        </a>
      </div>
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
