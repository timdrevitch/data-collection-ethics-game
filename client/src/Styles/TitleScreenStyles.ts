import styled from "styled-components";

//menu buttons
export const MenuButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 30%;
  height: 5%;
  right: -5%;
  font-size: 1vw;
  background-color: orange;
  border: 1px solid white;
  border-radius: 15px;
  text-align: left;
  padding-left: 2em;
  color: white;
`;
export const MenuButtonDisabled = styled.button`
  position: absolute;
  width: 30%;
  height: 5%;
  right: -5%;
  font-size: 1vw;
  background-color: orange;
  border: 1px solid white;
  border-radius: 15px;
  text-align: left;
  padding-left: 2em;
  color: white;
  opacity: 50%;
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
  background-color: orange;
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
  top: 7.5em;
  margin-left: 5%;
  font-size: 1.5vw;
  color: orange;
`;
export const GameTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 1em;
  margin-left: 5%;
  font-size: 3.5vw;
  text-shadow: 1px 1px 8px #fff, 1px 1px 8px #ccc;
`;
export const RelativeGameScene = styled.div`
  position: relative;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  opacity: 30%;
`;
export const WelcomePlayerContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 5%;
  top: 11.5em;
  right: -5%;
  font-size: 2vw;
  text-align: left;
  padding-left: 2em;
  color: white;
`;
export const PlayerImage = styled.img`
  display: inline-block;
  width: 1.2em;
  border-radius: 100%;
  vertical-align: bottom;
`;
export const PlayerSinceContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 5%;
  top: 17.5em;
  right: -5%;
  font-size: 1.5vw;
  text-align: left;
  padding-left: 2em;
  color: white;
`;