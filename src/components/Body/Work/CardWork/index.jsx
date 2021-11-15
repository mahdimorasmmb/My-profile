import React from "react";
import { StyledCardWork } from "./index.styled";

export const CardWork = ({ item }) => {
  return (
    <StyledCardWork>
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-dates">
        <label className="company-name">{item.company}</label>{" "}
        <div className="work-dates">
          <label>{item.dateJoining}</label> <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </StyledCardWork>
  );
};
