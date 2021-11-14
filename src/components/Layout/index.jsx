import React from "react";
import { Body } from "../Body";
import { Header } from "../Header";
import { Footer } from "../Footer";

import { StyledLayout } from "./index.styled";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </StyledLayout>
  );
};
