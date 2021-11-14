import styled from "styled-components";

export const StyledMobile = styled.div`
  background-color: white;
  height: 100vh;
  width: 60vw;
  position: absolute;
  right: 0;
  top: -6px;
  padding: 18px 12px;
  display: flex;
  flex-direction: column;

  .close-icon {
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
  }

  .mobile-options {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-top: 24px;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .mobile-option {
    font-size: 24px;
    margin: 12px 0;
    display: flex;

    a {
      text-decoration: none;
      color: black;
      display: flex;
    }
  }
`;
