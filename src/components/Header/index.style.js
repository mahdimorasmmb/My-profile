import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;

  justify-content: space-between;
  flex: 1;
  padding: 12px;
  position: relative;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  font-size: 36px;
  color: #9e60dd;
  font-weight: 800;

  @media only screen and (max-width: 720px) {
    font-size: 24px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const WebMenu = styled.div`
  display: flex;

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  .menu-icon {
    font-size: 24px;
  }

  @media only screen and (max-width: 720px) {
    display: flex;
  }
`;
