import styled from "styled-components";

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .skills-section {
    display: flex;
    justify-content: space-between;
    margin: 12px 0px;
  }
  .skills-section-title {
    font-size: 24px;
    font-weight: 600;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 70%;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 720px) {
    .skills-list {
      max-width: 100%;
      justify-content: center;
    }
    .skills-section {
      flex-direction: column;
      align-items: center;
    }
  }
`;
