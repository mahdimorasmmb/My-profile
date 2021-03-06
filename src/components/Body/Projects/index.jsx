import React from "react";
import { StyledProjects } from "./index.styled";
import { ProjectData } from "../../data/projects";
import { Project } from "./Project";
import { Separator } from "../../common/separator";

export const Projects = () => {
  const data = ProjectData;
  return (
    <StyledProjects>
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
    </StyledProjects>
  );
};
