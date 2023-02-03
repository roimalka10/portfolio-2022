import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeight from "../Reusables/PageHeight";
import { motion } from "framer-motion";

const animations = {
  exit: {
    opacity: 0,
  },
};

var body = document.body,
  html = document.documentElement;

var height =
  Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  ) * 5;

const ContentTemplate = ({ projectRef }) => {
  const [pageHeight] = PageHeight();

  return (
    <motion.div
      className="content-page"
      style={{
        minHeight: pageHeight ? height : "unset",
      }}
      variants={animations}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Header projectRef={projectRef} />
      <Outlet />
      <Footer />
    </motion.div>
  );
};
export default ContentTemplate;
