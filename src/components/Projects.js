import React, { forwardRef, useContext } from "react";
import "../css/Projects.css";
import { projects } from "../projects-data/projects-data";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { MouseContext } from ".././context/MouseContext";
import { Link } from "react-router-dom";

const Projects = forwardRef((props, ref) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <section className="projects" ref={ref}>
        <div className="wrapper">
          <motion.div
            className="headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <h5>What's New</h5>
            <h2>Projects</h2>
          </motion.div>
          <div className="list">
            {projects.map((project, index) => (
              <motion.div
                key={index + 1}
                className={`project project${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                <a
                  href={project.link}
                  className="project-image"
                  target="_blank"
                >
                  <div className="project-image-container">
                    <img src={project.img} />
                  </div>
                  <div className="image-number">0{index + 1}</div>
                </a>
                <div className="project-text">
                  <h5>0{index + 1}</h5>
                  <h2>{project.title}</h2>
                  <p>{project.about}</p>
                  <p className="stack">{project.stack}</p>
                  <Link
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                    className="project-btn"
                    to={project.page}
                  >
                    <span>Click To View Project Page</span>
                    <FaArrowRight size={14} className="icon-size" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Projects;
