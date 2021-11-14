import React, { useState } from "react";
import { Mobile } from "./Mobile";
import { Web } from "./Web";
import { Logo, Menu, MobileMenu, StyledHeader, WebMenu } from "./index.style";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Logo>Overreacted</Logo>
      <Menu>
        <WebMenu>
          {" "}
          <Web />
        </WebMenu>
        <MobileMenu>
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </MobileMenu>
      </Menu>
    </StyledHeader>
  );
};
