import styled from "styled-components";

export const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;
