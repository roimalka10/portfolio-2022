import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const animations = {
  exit: {
    opacity: 0,
  },
};

const ProjectsTemplate = ({ projectRef }) => {
  return (
    <motion.div
      className="project-page"
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
export default ProjectsTemplate;
