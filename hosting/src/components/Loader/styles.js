import styled from "styled-components";

export const Main = styled.header`
  width: 100vw;
  height: 100vh;

  position: absolute;

  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(158, 176, 164, 0.8);


  svg {
    width: 120px;
    height: 120px;

    opacity: 0;

    animation-name: appear;
    animation-duration: 1s;
    animation-timing-function: ease;
    /* animation-fill-mode: forwards; //fica no estado final */
    animation-delay: 0s;
    animation-iteration-count: 1; //quantidade de vezes que ela se repete

    @keyframes appear {
      to {
        opacity: 1;
      }
    }
  }

  .ok {
    fill: #ffffff;
  }
`;
