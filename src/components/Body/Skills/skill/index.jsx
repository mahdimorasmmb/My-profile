import React from "react";

import { StyledSkill } from "./index.styled";

export const Skill = ({ skill }) => {
  return (
    <StyledSkill>
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </StyledSkill>
  );
};
