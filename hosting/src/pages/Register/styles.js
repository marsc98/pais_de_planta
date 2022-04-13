import styled from "styled-components";

export const Main = styled.form`
  width: 100%;
  height: calc(100% - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  gap: 11px;

  .title {
    width: 100%;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .inputs {
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 11px;
  }

  .register {
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    margin: 20px 0;

    a {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;

      color: #ffffff;
    }
    
  }

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 72px;

    text-align: center;

    color: #ffffff;
  }
`;
