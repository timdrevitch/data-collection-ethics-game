import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
  RedSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint8 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 1) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage src={require("../Assets/innerCar.png")} alt="carimage" />
      <CityGif src={require("../Assets/drive3.gif")} alt="city" />
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
      <DystContainer
        style={{
          right: "47%",
          top: "23.7%",
          background: "white",
        }}
      >
        <DystrogramImage
          style={{
            height: "29em",
            width: "14.9em",
          }}
          src={require("../Assets/favicon2.jpg")}
          alt="DystogramPicture"
        />
      </DystContainer>
      <WelcomePlayerContainer
        style={{
          right: "29%",
          color: "white",
        }}
      >
        <strong>
          <YellowSpan>Dystogram</YellowSpan>
        </strong>
      </WelcomePlayerContainer>
      <PlayerSinceContainer
        style={{
          right: "29%",
          color: "white",
        }}
      >
        Create Profile
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "49.5%",
          color: "white",
          marginTop: "2em",
          width: "12em",
        }}
      >
        <br />
        Required:
        <hr />
        <RedSpan>*</RedSpan> User Name:{" "}
        <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        <RedSpan>*</RedSpan> Email:{" "}
        <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        <RedSpan>*</RedSpan> Password:{" "}
        <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        <br />
        <br />
        Optional:
        <hr />
        Date of Birth:{" "}
        <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        Occupation: <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        Degree: <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        Relationship Status:{" "}
        <input style={{ width: "90%", height: "15%" }} disabled />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </PlayerSinceContainer>
      <PhoneImage src={require("../Assets/phoneNoBg.png")} alt="phone" />
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: "1em",
          textAlign: "center",
          fontSize: "3.5vw",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
        }}
      >
        Checkpoint: {game.checkpoint}
      </h1>
      <div
        style={{
          position: "absolute",
          width: "90%",
          top: "13em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {game.readTerms ? (
          counter === 0 ? (
            <OrangeSpan>
              The terms says that the app shares user data. You should probably{" "}
              <em>ONLY</em> provide required info when signing up...{" "}
            </OrangeSpan>
          ) : (
            <span>
              The terms says that the app shares user data. You should probably{" "}
              <em>ONLY</em> provide required info when signing up...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            Looks like it's time to fill out your profile now!...{" "}
          </OrangeSpan>
        ) : (
          <span>Looks like it's time to fill out your profile now!... </span>
        )}
        {counter >= 1 ? (
          game.readTerms ? (
            counter === 1 ? (
              <OrangeSpan>
                Fill out the required fields and then sign up...{" "}
              </OrangeSpan>
            ) : (
              <span>Fill out the required fields and then sign up... </span>
            )
          ) : counter === 1 ? (
            <OrangeSpan>
              Fill out the required & optional fields and then complete your
              sign up!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Fill out the required & optional fields and then complete your
              sign up!...{" "}
            </span>
          )
        ) : null}
        {counter === 1 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 1 && (
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            height: "13%",
            top: "38em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          {game.readTerms ? (
            <>
              <CheckpointButton
                style={{ float: "left", opacity: "40%", cursor: "not-allowed" }}
                disabled
              >
                <em>
                  <RedSpan>Unavailable due to prior actions.</RedSpan>
                </em>
                <br />
                Fill out the FULL sign up form and continue.
              </CheckpointButton>
              <CheckpointButton
                style={{ float: "right" }}
                onClick={nextCheckpoint}
              >
                Fill out ONLY the required parts of the sign up form and
                continue.
              </CheckpointButton>
            </>
          ) : (
            <>
              <CheckpointButton
                style={{ float: "left" }}
                onClick={nextCheckpoint}
              >
                Fill out the FULL sign up form and continue.
              </CheckpointButton>
              <CheckpointButton
                style={{
                  float: "right",
                  opacity: "40%",
                  cursor: "not-allowed",
                }}
                disabled
              >
                <em>
                  <RedSpan>Unavailable due to prior actions.</RedSpan>
                </em>
                <br />
                Fill out ONLY the required parts of the sign up form and
                continue.
              </CheckpointButton>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkpoint8;
