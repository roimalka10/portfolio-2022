import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeight from "../Reusables/PageHeight";
import { motion, useScroll, useSpring } from "framer-motion";

const animations = {
  exit: {
    opacity: 0,
  },
};

const ProjectsTemplate = ({ projectRef }) => {
  const [pageHeight] = PageHeight();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="project-page"
      style={{ minHeight: pageHeight ? "200vh" : "unset" }}
      variants={animations}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header projectRef={projectRef} />
      <Outlet />
      <Footer />
    </motion.div>
  );
};
export default ProjectsTemplate;
