import styled from "styled-components";

export const StyledProject = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  padding: 8px 0px;

  .project-photo {
    width: 40%;
  }
  .project-info {
    margin-right: 24px;
  }
  .project-title {
    font-size: 20px;
    font-weight: 600;
  }
  .project-tags {
    display: flex;
    max-width: 60%;
    flex-wrap: wrap;
  }
  .tag {
    padding: 4px 8px;
    background-color: #9e60dd;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 4px;
  }

  .project-links {
    margin-top: 6px;
    display: flex;
    a {
      text-decoration: none;
      color: black;
    }
  }

  .link-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9e60dd;
    width: max-content;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 6px;
    border: 2px solid #9e60dd;
    &:hover {
      background-color: white;
      color: #9e60dd;
    }

    i {
      display: flex;
      align-items: center;
      mask-repeat: 4px;
    }
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column-reverse;
    .project-photo {
      width: 70%;
    }
    .project-info {
      margin-left: 8px;
      margin-top: 12px;
    }
    .project-tags {
      max-width: 100%;
    }
  }
`;
