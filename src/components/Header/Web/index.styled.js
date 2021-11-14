import styled from "styled-components";

export const StyledWeb = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  .web-option {
    font-size: 20px;
    margin-right: 16px;
    font-weight: 700;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;

      i {
        display: flex;
        align-items: center;
        margin-right: 4px;
      }
    }
  }
`;
