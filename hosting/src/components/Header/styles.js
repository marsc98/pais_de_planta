import styled from "styled-components";

export const Main = styled.header`
  width: 100%;
  height: 67px;

  left: 0px;
  top: 0px;

  background: #60876d;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  img {
    width: 60px;
    height: 60px;
  }

  section {
    display: none;
  }

  nav {
    button {
      display: flex;
      gap: 5px;
      cursor: pointer;
      background: none;
      color: #547660;
      .hamburguer {
        border-top: 3px solid #ffffff;
        border-top-color: ${(props) => props.navVisibility && "transparent"};
        width: 33px;
      }
      .hamburguer::after,
      .hamburguer::before {
        content: "";
        display: block;
        height: 3px;
        background: #ffffff;
        width: 33px;
        margin-top: 5px;
        transition: 0.3s;
        position: relative;
      }

      .hamburguer::before {
        transform: ${(props) => props.navVisibility && "rotate(135deg)"};
      }
      .hamburguer::after {
        transform: ${(props) => props.navVisibility && "rotate(-135deg)"};
        top: ${(props) => props.navVisibility && "-6.4px"};
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      top: 67px;
      position: absolute;
      width: 100%;
      right: 0px;
      background: #d7e4dc;
      height: ${(props) =>
        props.navVisibility ? "calc(100vh - 59px)" : "0px"};
      transition: 0.6s;
      z-index: 10000;
      visibility: ${(props) => (props.navVisibility ? "visible" : "hidden")};
      overflow-y: ${(props) => (props.navVisibility ? "auto" : "hidden")};
      text-decoration: none;

      li {
        width: 100%;
        margin: 15px 0px;
        padding: 8px 10px;

        div {
          width: 100%;

          border-bottom: 1px solid #547660;

          padding: 8px;

          a {
            width: 100%;
            text-decoration: none;

            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;

            color: #547660;
          }
        }

        button {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;

          color: #547660;
        }
      }
    }
    .socialMidia {
      width: 100%;
      height: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-bottom: 5px;

      svg {
        fill: #000000;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;

        gap: 8px;
      }

      span {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;

        color: #858383;
      }
    }
  }

  @media (min-width: 1200px) {
    height: 89px;

    img {
      width: 78px;
      height: 78px;
      margin-left: 8px;
    }

    nav {
      display: none;
    }

    section {
      display: flex;
      gap: 50px;
      padding-right: 20px;

      a,
      button {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;

        color: #ffffff;

        text-decoration: none;
      }
    }
  }
`;
