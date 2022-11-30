import styled, { keyframes } from "styled-components";

//animations
const blink = keyframes`
    0% {opacity: 100%}
    50% {opacity: 0%}
    100% {opacity: 100%}
`;
const shine = keyframes`
    0% { box-shadow: 1px 0 25px 2px midnightblue; }
    50% { box-shadow: 1px -8px 25px 2px skyblue; }
    100% { box-shadow: 1px 0 25px 2px midnightblue; }
`;

//Login
export const LoginPositionContainer = styled.div`
  position: absolute;
  width: 222px;
  top: 10em;
  margin-left: 5%;
  font-size: 1.5vw;
  color: orange;
  /* border: 1px solid red; */
  animation: ${shine} 1.5s infinite;
`;
export const LoadingText = styled.div`
  width: 80%;
  margin: 5px auto 0 auto;
  animation: ${blink} 2.5s infinite;
`;
export const LoginContainer = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  max-width: 650px;
  padding: 3rem;
  background: white;
  text-align: center;
  box-shadow: rgb(255, 255, 255) 0px 5px 15px;
`;
export const LoginImageContainer = styled.div`
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 5px rgba(1, 43, 17, 0.788);
  border: 1px solid green;
`;
export const LoginImage = styled.img`
  width: 5rem;
  height: 5rem;
`;
export const LogoImage = styled.img`
  width: 8rem;
  height: 8rem;
  background: black;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 0px 0px 50px 5px rgba(1, 43, 17, 0.788);
`;
export const GoogleLoginContainer = styled.div`
  width: 35.5em;
  /* margin: 0 auto; */
`;
export const EnterButton = styled.button`
  width: 40%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  color: white;
  background: linear-gradient(135deg, #c9de96 0%, #8ab66b 44%, #398235 100%);
  box-shadow: 0 2.5px 4px 0 rgba(0, 0, 0, 0.2),
    0 3.5px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 1.5% 3%;
  margin: 0 0.5rem 0 0.5rem;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    border: 1px solid green;
  }
`;
export const EnterButtonOrange = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  color: white;
  font-family: Trebuchet MS, sans-serif;
  background: linear-gradient(135deg, #f6e6b4 0%, #ed9017 72%, #ed9017 72%);
  box-shadow: 0 2.5px 4px 0 rgba(0, 0, 0, 0.2),
    0 3.5px 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: orange;
    border: 1px solid orange;
  }
`;
export const GrayHr = styled.hr`
  color: #43464b;
`;
export const LeftText = styled.div`
  float: left;
`;
export const RightText = styled.div`
  float: right;
`;
export const LogsContainer = styled.div`
  background: black;
  color: white;
  padding: 5px;
`;

//Logout
export const LogoutButton = styled.button`
  content: "Log out";
  background: linear-gradient(180deg, #ffffff 0%, #c6d1ba 44%, #788a78 100%);
  color: darkgreen;
  border: 1px solid darkgreen;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: darkgreen;
    color: white;
    padding-left: 13px;
    padding-right: 13px;
    border: 1px solid white;
    content: "Log out ✌️";
  }
`;
