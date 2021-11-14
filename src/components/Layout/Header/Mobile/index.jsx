import React from "react";
import { StyledMobile } from "./index.styled";

export const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMobile>
      <div className="close-icon" onClick={() => setIsOpen((prev) => !prev)}>
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="fi-rr-edit-alt "></i>Project
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi-rr-laptop "></i>Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i className="fi-rr-briefcase "></i>Work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#content">
            <i className="fi-rr-user "></i>Contact
          </a>
        </div>
      </div>
    </StyledMobile>
  );
};
