import React, { useContext } from "react";
import { Paths } from "../constants";
import { getSubPath } from "../utils";
import { motion } from "framer-motion";
import { MouseContext } from ".././context/MouseContext";

const OtherProjects = (props) => {
  const { exclude } = props;
  const projects = [
    Paths.WEATHER,
    Paths.TRAINER,
    Paths.PORTFOLIO2021,
    Paths.TESLA,
  ].filter((project) => project !== exclude);

  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <motion.div
      className="container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="another-project-btn-section">
        <p className="centered-text">
          Like what you see?
          <br />
          stick around and look at some other stuff I created.
        </p>
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          className="btn-container"
        >
          {projects.map((project) => getProjectLink(project))}
        </div>
      </div>
    </motion.div>
  );
};

const getProjectLink = (project) => {
  switch (project) {
    case Paths.WEATHER:
      return (
        <ProjectLink
          key={Paths.WEATHER}
          path={Paths.WEATHER}
          title="Weather-app"
        />
      );
    case Paths.PORTFOLIO2021:
      return (
        <ProjectLink
          key={Paths.PORTFOLIO2021}
          path={Paths.PORTFOLIO2021}
          title="portfolio-2021"
        />
      );
    case Paths.TESLA:
      return (
        <ProjectLink key={Paths.TESLA} path={Paths.TESLA} title="tesla clone" />
      );
    case Paths.TRAINER:
      return (
        <ProjectLink
          key={Paths.TRAINER}
          path={Paths.TRAINER}
          title="personal-trainer"
        />
      );
    default:
      break;
  }
};

const ProjectLink = ({ path, title }) => (
  <a href={getSubPath(path)} className="btn">
    {title}
  </a>
);

export default OtherProjects;
