import React from "react";
import { Separator } from "../../common/separator";
import { SkillsData } from "../../data/skills";
import { StyledSkills } from "./index.styled";
import { Skill } from "./skill";

export const Skills = () => {
  const data = SkillsData;
  return (
    <StyledSkills>
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => (
          <div className="skills-section">
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) => (
                <Skill skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
};
