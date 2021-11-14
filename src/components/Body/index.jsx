import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { StyledBody } from "./index.styled";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Work } from "./Work";

export const Body = () => {
  return (
    <StyledBody>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </StyledBody>
  );
};
