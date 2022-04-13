import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Main = styled.main`
  width: 100%;
  height: calc(100% - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 20px;

  gap: 30px;

  #toast-container > .toast-custom {
    content: "#000";
  }

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;

      color: #ffffff;
    }
  }

  section {
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      color: #ffffff;
    }

    button {
      width: 100%;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 400px;
      height: 40px;

      gap: 20px;

      background: #ffffff;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;

      color: #60876d;

      .telegramIcon {
        fill: #319fcd;
      }

      .linkIcon {
        fill: #000000;
      }
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }

  .buttonWrapper {
    width: 100%;
    max-width: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    margin-top: 40px;
    padding-bottom: 40px;
  }
`;
