import React from "react";
import { StyledSocialContact } from "./index.styled";
import { SocialData } from "../../data/social";

export const SocialContact = () => {
  const data = SocialData;
  return (
    <StyledSocialContact>
      {data.map((item) => (
        <a href={item.link} key={item.platform}>
          <div className="social-icon-div">
            <img src={item.icon} className="social-icon" />
          </div>
        </a>
      ))}
    </StyledSocialContact>
  );
};
