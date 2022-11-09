import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useContext, useState } from "react";
import { IUserToken } from "../Interfaces/IUserToken";
import { Context } from "../Shared/Context";
import { GoogleLoginContainer, LoadingText } from "../Styles/LoginLogoutStyles";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Login = () => {
  const {
    googleUserEmail,
    setGoogleUserEmail,
    googleUserFullName,
    setGoogleUserFullName,
    googleUserImage,
    setGoogleUserImage,
    googleUserLastName,
    setGoogleUserLastName,
    googleUserFirstName,
    setGoogleUserFirstName,
    setUserFullName,
    setUserEmail,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userEmail,
    userFullName,
    image,
    setImage,
    userExists,
    setUserExists,
    player,
    setPlayer,
    url,
  } = useContext(Context);
  const [playerName, setPlayerName] = useState<string>("");
  const clientId: string =
    "519426874197-o3jlhftgfofimfnl7an4ph1ii6n5ugo0.apps.googleusercontent.com";
  const ifUserExists: boolean = userExists && googleUserEmail !== null;
  const userIsNewAndNeedsToSignUp: boolean = googleUserEmail !== null;

  const checkIfUserExists = (email: string): void => {
    console.log(email);
    axios
      .get(`${url}/players/googleuserlogin/${email}`)
      .then((response) => {
        //if response is "null" then this user does not exist yet
        if (response.data === null) {
          setUserExists(false);
          //now create the user
        } else {
          //log the user in
          setUserExists(true);
          setPlayer(response.data);
        }
      })
      .catch((error) => console.warn(error));
  };

  const handleSignUp = (): void => {
    //make the date joined today's date
    const current: Date = new Date();
    let joinDateString: string = `${
      current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`;

    axios
      .post(`${url}/players/createplayer`, {
        email: googleUserEmail,
        fullname: googleUserFullName,
        firstname: googleUserFirstName,
        lastname: googleUserLastName,
        image: googleUserImage,
        joinDateString: joinDateString,
        playername: playerName,
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
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", opacity: "30%" }}
          src={require("../Assets/car.jpeg")}
          alt="carimage"
        />
        <h1
          style={{
            position: "absolute",
            width: "100%",
            top: "1em",
            marginLeft: "5%",
            fontSize: "3.5vw",
            textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
          }}
        >
          Data Collection Ethics Game
        </h1>
        <div
          style={{
            position: "absolute",
            width: "40%",
            top: "7.5em",
            marginLeft: "5%",
            fontSize: "1.5vw",
            color: "orange",
          }}
        >
          Tim Drevitch & Fangtai Bao
        </div>
        {ifUserExists ? (
          <>
            <div
              style={{
                position: "absolute",
                width: "30%",
                height: "5%",
                top: "11.5em",
                right: "-5%",
                fontSize: "2vw",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              Welcome, {player.playername}{" "}
              <img
                style={{
                  display: "inline-block",
                  width: "1.2em",
                  borderRadius: "100%",
                  verticalAlign: "bottom",
                }}
                src={player.image}
                alt="playerimage"
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "30%",
                height: "5%",
                top: "17.5em",
                right: "-5%",
                fontSize: "1.5vw",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              <em>Player since: {player.joinDateString}</em>
            </div>
            {player.gameInProgress ? (
              <button
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  width: "30%",
                  height: "5%",
                  top: "30em",
                  right: "-5%",
                  fontSize: "1vw",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  paddingLeft: "2em",
                  color: "white",
                }}
              >
                Continue
              </button>
            ) : (
              <button
                style={{
                  position: "absolute",
                  width: "30%",
                  height: "5%",
                  top: "30em",
                  right: "-5%",
                  fontSize: "1vw",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  paddingLeft: "2em",
                  color: "white",
                  opacity: "50%",
                }}
                disabled
              >
                Continue (no game in progress)
              </button>
            )}

            <button
              style={{
                cursor: "pointer",
                position: "absolute",
                width: "30%",
                height: "5%",
                top: "35em",
                right: "-5%",
                fontSize: "1vw",
                backgroundColor: "orange",
                border: "1px solid white",
                borderRadius: "15px",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              New Game
            </button>
            <button
              style={{
                cursor: "pointer",
                position: "absolute",
                width: "30%",
                height: "5%",
                top: "40em",
                right: "-5%",
                fontSize: "1vw",
                backgroundColor: "orange",
                border: "1px solid white",
                borderRadius: "15px",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              Settings
            </button>
          </>
        ) : userIsNewAndNeedsToSignUp ? (
          <>
            <form
              style={{
                position: "absolute",
                width: "40%",
                height: "25%",
                top: "30em",
                right: "-5%",
                fontSize: "1vw",
                backgroundColor: "orange",
                border: "1px solid white",
                borderRadius: "15px",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                overflow: "hidden",
              }}
              onSubmit={handleSignUp}
            >
              <p
                style={{
                  width: "80%",
                  margin: ".5em 0 0 0",
                  color: "darkred",
                }}
              >
                Looks like you are new. Choose any player name and then press
                the button below to complete your sign up.
              </p>
              <input
                style={{
                  boxSizing: "border-box",
                  width: "80%",
                  height: "30%",
                  marginTop: ".1em",
                  overflow: "hidden",
                  fontSize: "1vw",
                }}
                type="text"
                placeholder="Enter any player name here..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
              />
              <p
                style={{
                  width: "80%",
                  margin: ".5em 0 0 0",
                  color: "darkred",
                }}
              >
                <em>Examples: Player123, Jane Doe, etc...</em>
              </p>
              <button
                style={{
                  backgroundColor: "purple",
                  color: "white",
                  cursor: "pointer",
                  width: "80%",
                  height: "20%",
                  marginTop: ".1em",
                  overflow: "hidden",
                  fontSize: "1vw",
                }}
                type="submit"
              >
                Create Account
              </button>
            </form>
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              width: "40%",
              top: "10em",
              marginLeft: "5%",
              fontSize: "1.5vw",
              color: "orange",
            }}
          >
            <GoogleLoginContainer>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const token: string = credentialResponse.credential;
                  const decoded = jwt_decode<IUserToken>(token);
                  setGoogleUserFirstName(decoded.given_name);
                  setGoogleUserImage(decoded.picture);
                  setGoogleUserFullName(decoded.name);
                  setGoogleUserLastName(decoded.family_name);
                  setGoogleUserEmail(decoded.email);
                  checkIfUserExists(decoded.email);
                }}
                onError={() => console.log("Login Failed")}
              />
            </GoogleLoginContainer>
            <br />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
