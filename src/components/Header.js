import React, { useState } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../images/roimalkaCV-2.pdf";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header active" : "header"}>
      <NavLink to="/" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="383.41"
          height="257.689"
          viewBox="0 0 383.41 257.689"
        >
          <path
            id="small"
            d="M118.15-250.5l-14.633-4.906A65.575,65.575,0,0,0,135.7-271.2a66.359,66.359,0,0,0,21.849-49.225A66.358,66.358,0,0,0,135.7-369.647a65.219,65.219,0,0,0-42.947-16.822l-74.172-.006v4.566h7.841v248.558H18.585v4.566H59.928v-4.566H52.094l.38-80.4a40.425,40.425,0,0,1,38.549-40.417l39.991,120.816H124.05v4.566h41.343v-4.566h-8.475ZM52.086-232.758V-381.909l40.644.006a39.689,39.689,0,0,1,25.855,10.232,40.453,40.453,0,0,1,13.307,29.4v43.659a40.473,40.473,0,0,1-13.308,29.435,39.638,39.638,0,0,1-25.9,10.406h-.091A44.785,44.785,0,0,0,52.086-232.758Zm160.218,99.4h-7.84v4.566H254.2l.126-4.469-1.637-.093a38.028,38.028,0,0,1-35.815-37.935V-369.05L291-128.787h25.872l-11.251-36.468,62.875-203.8v235.7h-7.841v4.566H402v-4.566h-7.842V-381.91H402v-4.566h-32.9L303.228-173,237.365-386.476h-32.9v4.566H212.3Z"
            transform="translate(-18.585 386.476)"
          />
        </svg>
      </NavLink>
      <motion.ul
        onClick={handleClick}
        className={showMenu ? "menu active" : "menu"}
      >
        <div
          onClick={handleClick}
          className={showMenu ? "hamburger open" : "hamburger"}
        >
          <span>Close</span>
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <motion.li onClick={handleClick}>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span>Home</span>
          </NavLink>
        </motion.li>
        <motion.li onClick={handleClick}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span>About</span>
          </NavLink>
        </motion.li>
        <motion.li className="span-resume">
          <a href={resume} download>
            <span>Resume</span>
          </a>
        </motion.li>
        <motion.li>
          <a href="https://github.com/roimalka10" target="_blank">
            <span>Github</span>
          </a>
        </motion.li>
        <motion.li>
          <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
            <span>LinkedIn</span>
          </a>
        </motion.li>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="383.41"
            height="257.689"
            viewBox="0 0 383.41 257.689"
          >
            <path
              id="small"
              d="M118.15-250.5l-14.633-4.906A65.575,65.575,0,0,0,135.7-271.2a66.359,66.359,0,0,0,21.849-49.225A66.358,66.358,0,0,0,135.7-369.647a65.219,65.219,0,0,0-42.947-16.822l-74.172-.006v4.566h7.841v248.558H18.585v4.566H59.928v-4.566H52.094l.38-80.4a40.425,40.425,0,0,1,38.549-40.417l39.991,120.816H124.05v4.566h41.343v-4.566h-8.475ZM52.086-232.758V-381.909l40.644.006a39.689,39.689,0,0,1,25.855,10.232,40.453,40.453,0,0,1,13.307,29.4v43.659a40.473,40.473,0,0,1-13.308,29.435,39.638,39.638,0,0,1-25.9,10.406h-.091A44.785,44.785,0,0,0,52.086-232.758Zm160.218,99.4h-7.84v4.566H254.2l.126-4.469-1.637-.093a38.028,38.028,0,0,1-35.815-37.935V-369.05L291-128.787h25.872l-11.251-36.468,62.875-203.8v235.7h-7.841v4.566H402v-4.566h-7.842V-381.91H402v-4.566h-32.9L303.228-173,237.365-386.476h-32.9v4.566H212.3Z"
              transform="translate(-18.585 386.476)"
            />
          </svg>
        </div>
      </motion.ul>
      <div
        onClick={handleClick}
        className={showMenu ? "hamburger open" : "hamburger"}
      >
        <span>Menu</span>
        <div>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
