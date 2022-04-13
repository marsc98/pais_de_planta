import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 35px;
  max-width: 800px;

  background: ${props => props.white  ? '#ffffff' : '#bbffc2'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;

  color: #60876d;
`;
