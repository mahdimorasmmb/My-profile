import React from "react";
import { StyledProject } from "./index.styled";

export const Project = ({ project }) => {
  return (
    <StyledProject>
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}

          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original"></i>
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((item) => (
            <label className="tag">{item}</label>
          ))}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </StyledProject>
  );
};
