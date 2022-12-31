import React, { useRef, forwardRef } from "react";
import "../css/Projects.css";
import { projects } from "../projects-data/projects-data";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <section className="projects" ref={ref}>
        <div className="wrapper">
          <motion.div
            className="headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 },
            }}
          >
            <h5>What's New</h5>
            <h1>Projects</h1>
          </motion.div>
          <div className="list">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`project project${project.id}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 40 },
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
                  <div className="image-number">0{project.id}</div>
                </a>
                <div className="project-text">
                  <h5>0{project.id}</h5>
                  <h2>{project.title}</h2>
                  <p>{project.about}</p>
                  <p className="stack">{project.stack}</p>
                  <a
                    className="project-btn"
                    href={project.link}
                    target="_blank"
                  >
                    <span>Click To View Page</span>
                    <FaArrowRight size={14} className="icon-size" />
                  </a>
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
