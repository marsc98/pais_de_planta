import styled from "styled-components";

export const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 21px;

  color: ${props => props.green ? '#cc724b' : '#ffffff'};

  @media(max-width: 720px) {
  font-size: ${props => props.green && '12px'};

  }
`;
