import React from "react";
import { WorkData } from "../../data/work";
import { StyledWork } from "./index.styled";
import { Separator } from "../../common/separator";
import { CardWork } from "./CardWork";

export const Work = () => {
  const data = WorkData;
  return (
    <StyledWork>
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => (
          <CardWork item={item} />
        ))}
      </div>
    </StyledWork>
  );
};
