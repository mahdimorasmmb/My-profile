import React from "react";
import { StyledContact } from "./index.styled";
import { Separator } from "../../common/separator";
import { SocialContact } from "../../common/Social-contact";

export const Contact = () => {
  return (
    <StyledContact>
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Wavt to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a href="#">
            <i className="fi-rr-cloud-download download-icon"></i>Download
            Resume
          </a>
        </div>
      </div>
    </StyledContact>
  );
};
