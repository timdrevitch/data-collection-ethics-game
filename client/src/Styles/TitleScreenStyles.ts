import styled, { keyframes } from "styled-components";

//Animations
const blink = keyframes`
    0% {opacity: 100%}
    50% {opacity: 0%}
    100% {opacity: 100%}
`;
const risePhone = keyframes`
    0% {top: 9.5em}
    100% {top: 0.5em}
`;
const risePlayer = keyframes`
    0% {top: 23em}
    100% {top: 14em}
`;
const riseDystogram = keyframes`
    0% {top: 23em}
    100% {top: 23.7%}
`;
const risePlayerSince = keyframes`
    0% {top: 32em}
    100% {top: 20em}
`;
const riseStatsButton = keyframes`
    0% {top: 42em}
    100% {top: 30em}
`;
const riseContinueButton = keyframes`
    0% {top: 35em}
    100% {top: 23em}
`;
const riseNewGameButton = keyframes`
    0% {top: 38.5em}
    100% {top: 26.5em}
`;
const riseLeaderboards = keyframes`
    0% {top: 45.5em}
    100% {top: 33.5em}
`;

//title styles
export const PhoneImage = styled.img`
  position: absolute;
  width: 70%;
  top: 0.5em;
  right: 20%;
  animation: ${risePhone} 2s 1;
`;
export const MenuButtonContinue = styled.button`
  cursor: pointer;
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 23em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  animation: ${riseContinueButton} 2s 1;
  /* transition: all 0.5s ease-in-out; */
  &:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px purple;
  }
`;
export const MenuButtonContinueDisabled = styled.button`
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 23em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  opacity: 50%;
  animation: ${riseContinueButton} 2s 1;
`;

export const MenuButtonNewGame = styled.button`
  cursor: pointer;
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 26.5em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  animation: ${riseNewGameButton} 2s 1;
  /* transition: all 0.5s ease-in-out; */
  &:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px purple;
  }
`;
export const MenuButtonNewGameDisabled = styled.button`
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 26.5em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  opacity: 50%;
  animation: ${riseNewGameButton} 2s 1;
`;
export const MenuButtonStats = styled.button`
  cursor: pointer;
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 30em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  animation: ${riseStatsButton} 2s 1;
  /* transition: all 0.5s ease-in-out; */
  &:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px purple;
  }
`;
export const MenuButtonLeaderboards = styled.button`
  cursor: pointer;
  position: absolute;
  width: 8%;
  height: 5.1%;
  right: 52%;
  top: 33.5em;
  font-size: 1vw;
  /* background-color: lightsalmon;
  border: 1px solid white; */
  background-image: url("https://www.pngall.com/wp-content/uploads/13/Orange-Button-PNG-Image.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 55px;
  text-align: center;
  color: white;
  animation: ${riseLeaderboards} 2s 1;
  &:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px purple;
  }
`;
export const CreateAccountButton = styled.button`
  background-color: purple;
  color: white;
  cursor: pointer;
  width: 80%;
  height: 20%;
  margin-top: 0.1em;
  overflow: hidden;
  font-size: 1vw;
`;
export const RedInfoP = styled.p`
  width: 80%;
  margin: 0.5em 0 0 0;
  color: darkred;
`;
export const CreateAccountForm = styled.form`
  position: absolute;
  width: 40%;
  height: 25%;
  top: 30em;
  right: -5%;
  font-size: 1vw;
  background-color: lightsalmon;
  border: 1px solid white;
  border-radius: 15px;
  text-align: left;
  padding-left: 2em;
  color: white;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
export const CreateAccountInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 30%;
  margin-top: 0.1em;
  overflow: hidden;
  font-size: 1vw;
`;
export const AuthorsContainer = styled.div`
  position: absolute;
  width: 40%;
  top: 10.5em;
  margin-left: 5%;
  font-size: 1.5vw;
  color: lightsalmon;
`;
export const GameTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 3em;
  margin-left: 5%;
  font-size: 3.5vw;
  text-shadow: 1px 1px 4px lightsalmon, 1px 1px 4px lightsalmon;
`;
export const RelativeGameScene = styled.div`
  position: relative;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  z-index: 100;
`;
export const WelcomePlayerContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 5%;
  top: 14em;
  right: 34%;
  font-size: 1.3vw;
  text-align: left;
  padding-left: 2em;
  color: #1a1d22;
  animation: ${risePlayer} 2s 1;
`;
export const DystContainer = styled.div`
  position: absolute;
  height: 29em;
  width: 14em;
  top: 14em;
  right: 34%;
  font-size: 1.3vw;
  text-align: left;
  color: #1a1d22;
  animation: ${riseDystogram} 2s 1;
`;
export const PlayerImage = styled.img`
  display: inline-block;
  width: 1.2em;
  border-radius: 100%;
  vertical-align: bottom;
  animation: ${risePlayer} 2s 1;
`;
export const DystrogramImage = styled.img`
  display: inline-block;
  width: 1.2em;
  vertical-align: bottom;
  animation: ${riseDystogram} 2s 1;
`;
export const PlayerSinceContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 5%;
  top: 20em;
  right: 34%;
  font-size: 1vw;
  text-align: left;
  padding-left: 2em;
  color: #1a1d22;
  animation: ${risePlayerSince} 2s 1;
`;
export const CityGif = styled.img`
  position: sticky;
  width: 100%;
  opacity: 50%;
  z-index: -100;
  margin-top: -250vw;
`;
export const DarkFooter = styled.div`
  margin-top: -100vw;
  width: 100vw;
  height: 100vw;
  opacity: 40%;
  background-color: #1a1d22;
  z-index: 2000;
`;
export const DarkFooter2 = styled.div`
  margin-top: -5vw;
  position: sticky;
  width: 100vw;
  height: 10vw;
  opacity: 100%;
  background-color: #1a1d22;
  z-index: 2000;
`;
export const DarkFooter3 = styled.div`
  margin-top: -5vw;
  position: absolute;
  width: 100vw;
  height: 100vw;
  opacity: 100%;
  background-color: #1a1d22;
  z-index: 2000;
`;
