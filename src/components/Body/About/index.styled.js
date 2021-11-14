import styled from "styled-components";

export const StyledAbout = styled.div`
  padding-bottom: 48px;

  .about-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-photo {
    img {
      height: 420px;
    }
  }
  .info-name {
    color: #9e60dd;
    font-size: 32px;
  }

  @media only screen and (max-width: 720px) {
    .about-top {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .about-photo {
      img {
        height: 280px;
      }
    }

    .about-info {
      font-size: 20px;
    }

    .info-name {
      font-size: 26px;
    }
  }
`;
