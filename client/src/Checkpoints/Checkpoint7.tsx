import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NextButton, OrangeSpan, YellowSpan } from "../Styles/SharedStyles";
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

const Checkpoint7 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervious);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 1) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (readTermsChoice: boolean) => {
    let data = { readTermsChoice: readTermsChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
      setRender(!render);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage
        src={require("../Assets/carbackground.png")}
        alt="carimage"
      />
      <CityGif src={require("../Assets/city.gif")} alt="city" />
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
          src={require("../Assets/favicon.jpeg")}
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
          right: "29.5%",
          color: "white",
        }}
      >
        Terms of Service
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "49.5%",
          color: "white",
          marginTop: "2em",
          width: "12em",
        }}
      >
        ********************************* To use this app, you must specify that
        you agree to the following terms of use and acknowledge all copyright
        and privacy details and concerns. *********************************
        These include, but are not limited to: *********************************{" "}
        <em>Dystogram</em>'s Privacy Polocies (P1A-P42F) <em>Dystogram</em>'s
        Personal Data Sharing Polocies (D1A-D23B) <em>Dystogram</em>'s
        Harassment and Bulying Polocies (H1A-H16G) <em>Dystogram</em>'s Use
        Protection Clauses (U1A-U3C) <em>Dystogram</em>'s Data Collection
        Methods Polocies (C1A-C30D) <em>Dystogram</em>'s Photo and Video Sharing
        Polocies (C1A-C30D) <em>Dystogram</em>'s Govt. Complience & Involvement
        Procedureal Polocies (G1A-G55I) <em>Dystogram</em>'s Harassment and
        Bulying Polocies V2 (H1A-H16G) <em>Dystogram</em>'s Use Protection
        Clauses V2 (U1A-U3C)...
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
        {counter === 0 ? (
          <OrangeSpan>
            Looks cool! The app wants you to accept its terms of service before
            using it...{" "}
          </OrangeSpan>
        ) : (
          <span>
            Looks cool! The app wants you to accept its terms of service before
            using it...{" "}
          </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>
              Go ahead and accept now, the app can't be used without accepting
              them...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Go ahead and accept now, the app can't be used without accepting
              them...{" "}
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
            width: "25%",
            height: "10%",
            top: "35em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              float: "left",
              width: "45%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
            }}
            onClick={() => nextCheckpoint(false)}
          >
            Accept the Terms of Service.
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "right",
              width: "45%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
            }}
            onClick={() => nextCheckpoint(true)}
          >
            Read the Terms of Service in depth and then accept them.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint7;
