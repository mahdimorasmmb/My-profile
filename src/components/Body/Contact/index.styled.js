import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .section-title {
    font-size: 32px;
    font-weight: 700;
  }
  .contact-container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0px;
  }
  .contact-left {
    max-width: 60%;
    font-size: 20px;
    text-align: center;
  }

  .download {
    background-color: #9e60dd;
    padding: 8px 16px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #9e60dd;
    border-radius: 10px;
    a {
      text-decoration: none;
      color: black;
    }
    &:hover {
      background-color: white;
      a {
        color: #9e60dd;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .contact-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .contact-left {
      max-width: 100%;
      font-size: 16px;
      margin-bottom: 12px;
    }
    .download {
      font-size: 16px;
    }
  }
`;
