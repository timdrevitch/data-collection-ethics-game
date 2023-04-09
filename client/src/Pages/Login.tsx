import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { IUserToken } from "../Interfaces/IUserToken";
import { Context } from "../Shared/Context";
import {
  GoogleLoginContainer,
  LoginPositionContainer,
} from "../Styles/LoginLogoutStyles";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  AuthorsContainer,
  BackgroundImage,
  CityGif,
  CreateAccountButton,
  CreateAccountForm,
  CreateAccountInput,
  DarkFooter,
  DarkFooter2,
  DarkFooter3,
  GameTitle,
  RedInfoP,
  RelativeGameScene,
} from "../Styles/TitleScreenStyles";
import TitleScreenMenu from "../Components/TitleScreenMenu";

const Login = () => {
  const Filter = require("bad-words");
  const filter = new Filter();
  const {
    userEmail,
    setUserEmail,
    userFullName,
    setUserFullName,
    userImage,
    setUserImage,
    userLastName,
    setUserLastName,
    userFirstName,
    setUserFirstName,
    userExists,
    setUserExists,
    player,
    setPlayer,
    url,
    setGameId,
  } = useContext(Context);
  const [playerName, setPlayerName] = useState<string>("");
  const clientId: string =
    "1018892148615-6gcr6db7dhtiilpsjcnabrvs5pqgq9rc.apps.googleusercontent.com";
  const ifUserExists: boolean = userExists && userEmail !== null;
  const userIsNewAndNeedsToSignUp: boolean = userEmail !== null;
  const needToFetchPlayer: boolean = player !== undefined && player !== null;

  useEffect(() => {
    if (needToFetchPlayer) {
      axios
        .get(`${url}/playerstats/${player._id}`)
        .then((response) => {
          setGameId(player.currentGame);
          setPlayer(response.data);
        })
        .catch((error) => console.warn(error));
    }
  }, []);

  const checkIfUserExists = (email: string): void => {
    axios
      .get(`${url}/players/userlogin/${email}`)
      .then((response) => {
        //if response is "null" then this user does not exist yet
        if (response.data === null) {
          setUserExists(false);
          //now create the user
        } else {
          //log the user in
          setUserExists(true);
          setPlayer(response.data);
          setGameId(player.currentGame);
        }
      })
      .catch((error) => console.warn(error));
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    //make the date joined today's date
    const current: Date = new Date();
    let joinDateString: string = `${
      current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`;
    let censoredName = filter.clean(playerName);

    axios
      .post(`${url}/players/createplayer`, {
        email: userEmail,
        fullname: userFullName,
        firstname: userFirstName,
        lastname: userLastName,
        image: userImage,
        joinDateString: joinDateString,
        playername: censoredName,
      })
      .then((response) => {
        console.log(response.data);
        setPlayer(response.data);
        setUserExists(true);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <RelativeGameScene>
        <BackgroundImage
          src={require("../Assets/innerCar.png")}
          alt="carimage"
        />
        <CityGif src={require("../Assets/drive3.gif")} alt="city" />
        <DarkFooter></DarkFooter>
        <DarkFooter2></DarkFooter2>
        <DarkFooter3></DarkFooter3>
        {ifUserExists ? (
          <TitleScreenMenu player={player} url={url} setGameId={setGameId} />
        ) : userIsNewAndNeedsToSignUp ? (
          <>
            <GameTitle>
              <em>Dystocity: Job Hunt</em>{" "}
              <span style={{ color: "orange", fontSize: "1.5vw" }}>
                Beta Version 0.1.41
              </span>
            </GameTitle>
            {/* <AuthorsContainer>Tim Drevitch & Fangtai Bao</AuthorsContainer> */}
            <CreateAccountForm onSubmit={handleSignUp}>
              <RedInfoP>
                Looks like you are new. Choose any player name and then press
                the button below to complete your sign up.
              </RedInfoP>
              <CreateAccountInput
                required
                minLength={3}
                maxLength={20}
                type="text"
                placeholder="Enter any player name here..."
                value={playerName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPlayerName(e.target.value)
                }
              />
              <RedInfoP>
                <em>Examples: Player123, Jane Doe, etc...</em>
              </RedInfoP>
              <CreateAccountButton type="submit">
                Create Account
              </CreateAccountButton>
            </CreateAccountForm>
          </>
        ) : (
          <>
            <GameTitle>
              <em>Dystocity: Job Hunt</em>{" "}
              <span style={{ color: "orange", fontSize: "1.5vw" }}>
                Beta Version 0.1.47
              </span>
            </GameTitle>
            {/* <AuthorsContainer>Tim Drevitch & Fangtai Bao</AuthorsContainer> */}
            <LoginPositionContainer>
              <GoogleLoginContainer>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const token: string = credentialResponse.credential;
                    const decoded = jwt_decode<IUserToken>(token);
                    setUserFirstName(decoded.given_name);
                    setUserImage(decoded.picture);
                    setUserFullName(decoded.name);
                    setUserLastName(decoded.family_name);
                    setUserEmail(decoded.email);
                    checkIfUserExists(decoded.email);
                  }}
                  onError={() => console.log("Login Failed")}
                  size="large"
                  width="12%"
                  theme="filled_black"
                />
              </GoogleLoginContainer>
            </LoginPositionContainer>
          </>
        )}
      </RelativeGameScene>
    </GoogleOAuthProvider>
  );
};

export default Login;
