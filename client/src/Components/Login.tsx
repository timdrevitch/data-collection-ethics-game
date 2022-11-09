import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
import { IUserToken } from "../Interfaces/IUserToken";
import { Context } from "../Shared/Context";
import { GoogleLoginContainer, LoadingText } from "../Styles/LoginLogoutStyles";
import jwt_decode from "jwt-decode";

const Login = () => {
  const {
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
  } = useContext(Context);
  const clientId: string =
    "519426874197-o3jlhftgfofimfnl7an4ph1ii6n5ugo0.apps.googleusercontent.com";

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
        {userFullName ? (
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
              Welcome, {userEmail}
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
                  setUserFirstName(decoded.given_name);
                  setUserLastName(decoded.family_name);
                  setImage(decoded.picture);
                  setUserFullName(decoded.name);
                  setUserEmail(decoded.email);
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
