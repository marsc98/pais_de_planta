import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #000;
    }
    html, body, #root{
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color:000;
        overflow-x: hidden;  //DO NOT REMOVE!!
    }
    *, button, input{
        border: 0;
        background: none;
        font: 400 1.8rem/1 'Roboto';
        outline: none;
    }
    button {
        cursor: pointer;
    }
    button:hover {
        opacity: 0.8;
    }
    button:active{
        transform: translateY(1px);
    }
    html{
        background: #759B81;
    }
    :root{
        font-size: 62.5%;
    }

    img {
        opacity: 0;

        animation-name: appear;
        animation-duration: 0.6s;
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
    
`;
