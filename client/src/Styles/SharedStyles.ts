import styled, { keyframes } from "styled-components";

const shine = keyframes`
    0% { box-shadow: 1px 0 25px 2px midnightblue; }
    50% { box-shadow: 1px -8px 25px 2px skyblue; }
    100% { box-shadow: 1px 0 25px 2px midnightblue; }
`;

//full site
export const Indent = styled.hr`
  opacity: 0;
`;
export const GreenSpan = styled.span`
  color: green;
`;
export const LimeGreenSpan = styled.span`
  color: limegreen;
`;
export const OrangeSpan = styled.span`
  color: lightsalmon;
`;
export const OrangeRedSpan = styled.span`
  color: orangered;
`;
export const YellowSpan = styled.span`
  color: yellow;
`;
export const PurpleSpan = styled.span`
  color: purple;
`;
export const GraySpan = styled.span`
  color: gray;
`;
export const RedItalicSpan = styled.span`
  color: red;
  font-style: italic;
`;
export const RedSpan = styled.span`
  color: red;
`;
export const BlueSpan = styled.span`
  color: blue;
`;
export const DarkRedSpan = styled.span`
  color: darkred;
`;
export const NextButton = styled.button`
  cursor: pointer;
  background-color: lightsalmon;
  border: 1px solid white;
  border-radius: 15px;
  text-align: center;
  color: white;
  min-width: 6vw;
  min-height: 1.7vw;
  vertical-align: middle;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  animation: ${shine} 1.5s infinite;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: white;
    color: lightsalmon;
    border: 1px solid lightsalmon;
  }
`;
export const CheckpointButton = styled.button`
  cursor: pointer;
  //float: right;
  width: 45%;
  height: 100%;
  font-size: 1vw;
  //backgroundColor: orange;
  //border: 1px solid white;
  border-radius: 60px;
  border: none;
  text-align: left;
  padding: 0 2.5em;
  font-family: Trebuchet MS, "sans-serif";
  color: black;
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 20px white;
  }
`;
