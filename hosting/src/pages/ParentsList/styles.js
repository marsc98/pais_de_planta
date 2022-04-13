import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 20px;

  gap: 11px;

  .title {
    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;

      color: #ffffff;
    }
  }

  .add {
    width: 100%;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 20px 0;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: #ffffff;
      }

      gap: 8px;
      svg {
        width: 22px;
        height: 22px;
        fill: #ffffff;
        color: #fff;
      }
    }
  }
`;

export const Parent = styled.div`
  width: 90%;
  max-width: 800px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #ffffff;

  padding: 1px 8px;

  margin-top: 10px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    color: #ffffff;
  }
`;
