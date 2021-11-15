import styled from "styled-components";

export const StyledSkill = styled.div`
  width: max-content;
  padding: 8px 16px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px;
  border-radius: 8px;
  .skill-icon {
    font-size: 80px;
  }

  .skill-name {
    font-size: 18px;
  }

  @media only screen and (max-width: 720px) {
    width: max-content;
    height: 100px;
    .skill-icon {
      font-size: 60px;
    }
  }
`;
