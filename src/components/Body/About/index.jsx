import React from "react";
import { SocialContact } from "../../common/Social-contact";
import { StyledAbout } from "./index.styled";

export const About = () => {
  return (
    <StyledAbout>
      <div className="about-top">
        <div className="about-info">
          Hello There , I am
          <br /> <span className="info-name">
            Mahdi Moraseiyan Bidgoli
          </span>{" "}
          <br /> I am Web Developer
        </div>
        <div className="about-photo">
          <img src="./images/Profile.png" />
        </div>
      </div>
      <SocialContact />
    </StyledAbout>
  );
};
