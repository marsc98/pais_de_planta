import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 30px 0;

  div {
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      padding: 8px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      color: #ffffff;
    }
  }

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff;

    margin-top: 30px;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;

    gap: 10px;

    margin-top: 30px;

    label {
      display: ${(props) => (props.hide1 ? "none" : "block")};

      opacity: 0;

      animation-name: appear;
      animation-duration: 0.3s;
      animation-fill-mode: forwards; //fica no estado final
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: 1; //quantidade de vezes que ela se repete

      @keyframes appear {
        to {
          opacity: 1;
        }
      }
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 20px;
    }
  }

  section {
    width: 100%;
    padding: 0 40px;

    margin-top: 30px;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      color: #ffffff;
    }

    label {
      display: ${(props) => (props.hide2 ? "none" : "block")};
      align-self: flex-start;
      opacity: 0;
      padding-bottom: 8px;

      animation-name: appear;
      animation-duration: 0.3s;
      animation-fill-mode: forwards; //fica no estado final
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: 1; //quantidade de vezes que ela se repete

      @keyframes appear {
        to {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .title {
      margin-top: 90px;
      h1 {
        font-size: 55px;
        margin-bottom: 12px;
      }
    }
    section {
      padding: 0 90px;
    }
  }
`;
