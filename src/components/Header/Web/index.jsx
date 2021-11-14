import React from "react";
import { StyledWeb } from "./index.styled";

export const Web = () => {
  return (
    <StyledWeb>
      <div className="web-option">
        <a href="#projects">
          <i className="fi-rr-edit-alt "></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-laptop "></i>Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#work">
          <i className="fi-rr-briefcase "></i>Work
        </a>
      </div>

      <div className="web-option">
        <a href="#content">
          <i className="fi-rr-user "></i>Contact
        </a>
      </div>
    </StyledWeb>
  );
};
