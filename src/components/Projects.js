import React from "react";
import "../css/Projects.css";
import { projects } from "../projects-data/projects-data";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="wrapper">
          <div className="headline">
            <h5>What's New</h5>
            <h1>Projects</h1>
          </div>
          <div className="list">
            {projects.map((project) => (
              <div key={project.id} className={`project project${project.id}`}>
                <a href={project.link} target="_blank">
                  <div className="project-image">
                    <img src={project.img} />
                  </div>
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
