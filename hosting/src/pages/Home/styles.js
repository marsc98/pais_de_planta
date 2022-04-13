import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .health {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #fafffa;

    padding: 30px 10px;

    box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.25);

    h3 {
      width: 90%;
      max-width: 400px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 13px;

      text-align: center;

      color: #60876d;
    }

    section {
      display: none;
    }

    .levels {
      width: 100%;
      max-width: 400px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 10px;

        h2 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;

          color: #60876d;
        }

        span {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e3e3e3;
          box-sizing: border-box;
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
          border-radius: 6px;

          display: flex;
          justify-content: center;
          align-items: center;

          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          line-height: 15px;

          color: #60876d;
          padding: 12px;
        }
      }

      img {
        width: 190px;
        height: 190px;
      }
    }

    h4 {
      max-width: 400px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 11px;

      text-align: center;

      color: #60876d;
    }
  }

  .graphicsWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-bottom: 50px;

    .parents {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 50px;

      padding: 20px;

      gap: 10px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 15px;
      text-align: center;

      color: #60876d;

      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 6px;

      svg {
        fill: #60876d;
      }
    }

    .graphTitle {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 22px;

      color: #ffffff;

      margin-top: 20px;

      padding: 10px;
    }

    .graphic {
      width: 90%;

      background: #ffffff;

      margin-top: 20px;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }
  }

  @media (min-width: 1200px) {
    height: calc(100% - 89px);
    flex-direction: row;
    margin-bottom: none;

    .health {
      width: 50%;
      height: 100%;
      margin: 0;
      padding: 0;

      gap: 20px;

      h3 {
        width: 100%;
        font-size: 23px;
        line-height: 26px;
      }

      h4 {
        width: 100%;
        font-size: 18px;
        line-height: 21px;
      }

      .levels {
        justify-content: center;

        img {
          width: 300px;
          height: 300px;
        }

        div {
          display: none;
        }
      }

      section {
        width: 85%;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 20px;

        background: #759b81;

        .boardTitle {
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 8px;
        }

        .boardContent {
          width: 100%;
          display: flex;

          h4 {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 500;
            font-size: 26px;
            line-height: 35px;

            color: #ffffff;
          }

          div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;

            padding-top: 20px;
          }

          div:nth-child(1) {
            border-right: 1px solid #ffffff;
            justify-content: flex-start;
          }
        }
      }
    }

    .graphicsWrapper {
      width: 50%;
      height: 100%;
      margin: 0;
      padding: 0;
      justify-content: flex-start;

      overflow-y: scroll;

      padding: 30px 0;

      gap: 10px;

      .parents {
        display: none;
      }

      .graphTitle {
        margin: 5px;
        padding: 0;
        font-size: 22px;
      }
    }
  }
`;
