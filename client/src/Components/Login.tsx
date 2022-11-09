import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
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
          setUserExists(true);
          setPlayer(response.data);
          //   switchStatusOnline(true, response.data._id);
          //   setNews(true);
          //existing user is signed in
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
      })
      .then((response) => {
        console.log(response.data);
        setPlayer(response.data);
        setUserExists(true);
        // setNews(true);
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
        {userExists ? (
          <>
            <div
              style={{
                // cursor: "pointer",
                position: "absolute",
                width: "30%",
                height: "5%",
                top: "17.5em",
                right: "-5%",
                fontSize: "1.5vw",
                // backgroundColor: "orange",
                // border: "1px solid white",
                // borderRadius: "15px",
                textAlign: "left",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              Welcome, {googleUserEmail}
            </div>
            <button
              style={{
                // cursor: "pointer",
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
              Continue
            </button>
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
            <button
              style={{
                cursor: "pointer",
                position: "absolute",
                width: "40%",
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
              onClick={handleSignUp}
            >
              Looks like you are new. Press here to complete your sign up.
            </button>
            {/* <div
              style={{
                border: "5px solid #36868f",
                width: "90%",
                minWidth: "300px",
                textAlign: "center",
                margin: "2rem auto",
                borderRadius: "10px",
                paddingTop: "20px",
                paddingBottom: "20px",
                background: "#203671",
                overflow: "hidden",
              }}
            >
              Please enter more info to complete sign up
              <hr style={{ width: "50%" }} />
              <form>
                <label>Email: </label>
                <input disabled value={googleUserEmail} />
                <br />
                <label>Name: </label>
                <input disabled value={googleUserFullname} />
                <br />
                <label>(Optional) Favorite Color: </label>
                <select
                  style={{ cursor: "pointer" }}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFavColor(e.target.value)
                  }
                  value={favColor}
                >
                  <optgroup label="Choose a color..." />
                  <option value="none" hidden>
                    Please choose a color...
                  </option>
                  <option value="red">Red</option>
                  <option value="skyblue">Skyblue</option>
                  <option value="orange">Orange</option>
                  <option value="green">Green</option>
                  <option value="limegreen">Limegreen</option>
                  <option value="maroon">Maroon</option>
                  <option value="pink">Pink</option>
                  <option value="black">Black</option>
                </select>
                <br />
                <label>(Optional) Icon Preferance: </label>
                <select
                  style={{ cursor: "pointer" }}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFavIcon(e.target.value)
                  }
                  value={favIcon}
                >
                  <optgroup label="Choose an icon..." />
                  <option value="none" hidden>
                    Please choose an icon...
                  </option>
                  <option value="default">User</option>
                  <option value="wing">Wing</option>
                  <option value="ghost">Ghost</option>
                  <option value="ball">Ball</option>
                  <option value="money">Money</option>
                  <option value="diamond">Diamond</option>
                </select>
                <br />
                <label>(Optional) Birthday: </label>
                <input
                  type="date"
                  style={{ cursor: "pointer" }}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBday(e.target.value)
                  }
                  value={bday}
                />
              </form>
              <button style={{ cursor: "pointer" }} onClick={handleSignUp}>
                Complete Sign Up
              </button>
            </div> */}
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
            {/* <LoadingText>
              Please log in using your
              <GreenSpan> VGRDN </GreenSpan>
              Google account below.
            </LoadingText>
            <br />
            <br /> */}
            <GoogleLoginContainer>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const token: string = credentialResponse.credential;
                  const decoded = jwt_decode<IUserToken>(token);
                  //   setUserFirstName(decoded.given_name);
                  //   setUserLastName(decoded.family_name);
                  //   setImage(decoded.picture);
                  //   setUserFullName(decoded.name);
                  //   setUserEmail(decoded.email);
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
