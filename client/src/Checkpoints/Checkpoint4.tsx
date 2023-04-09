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
  DarkFooter,
  DarkFooter2,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint4 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 2) {
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
    <>
      <img
        style={{
          // position: "fixed",
          // fontSize: "1vw",
          // height: "20vw",
          // zIndex: "101",
          // marginTop: "21.7em",
          // marginLeft: "53em",
          opacity: "80%",
          position: "absolute",
          zIndex: "101",
          width: "30%",
          top: "13.5em",
          marginLeft: "51.5%",
          fontSize: "1.5vw",
        }}
        src={require("../Assets/catGif3.gif")}
        alt="cat"
      />
      <div style={{ position: "relative" }}>
        <BackgroundImage
          style={{
            height: "55vw",
          }}
          src={require("../Assets/bedroom3.jpg")}
          alt="bedroomimage"
        />
        {/* <PhoneImage src={require("../Assets/hand.png")} alt="phone" />
        <WelcomePlayerContainer
          style={{
            right: "27%",
          }}
        >
          <strong>Dystogram</strong>
        </WelcomePlayerContainer>
        <WelcomePlayerContainer
          style={{
            right: "34%",
          }}
        >
          <PlayerImage
            style={{
              height: "5em",
              width: "5em",
              right: "38%",
              borderRadius: "10px",
            }}
            src={require("../Assets/favicon2.jpg")}
            alt="DystogramPicture"
          />
        </WelcomePlayerContainer>
        <PlayerSinceContainer
          style={{
            right: "27%",
          }}
        >
          ⭐️⭐️⭐️⭐️⭐️
        </PlayerSinceContainer>
        <PlayerSinceContainer
          style={{
            right: "27%",
            marginTop: "1.3em",
          }}
        >
          <strong>4.9</strong> (1.7M Ratings)
        </PlayerSinceContainer>
        <PlayerSinceContainer
          style={{
            right: "27%",
            textDecoration: "underline",
            marginTop: "2.6em",
          }}
        >
          Download
        </PlayerSinceContainer> */}
        {/* <CityGif src={require("../Assets/city.gif")} alt="city" /> */}
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
          <RedSpan>*</RedSpan> Phone:{" "}
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
        {/* <h1
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
        </h1> */}
        <div
          style={{
            position: "absolute",
            width: "90%",
            top: "12em",
            marginLeft: "5%",
            fontSize: "2vw",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
            zIndex: "102",
          }}
        >
          {counter === 0 ? (
            <>
              {game.readTerms ? (
                <OrangeSpan>
                  I thoroughly read the informed consent, but it is quite
                  complex and difficult to understand completely...{" "}
                </OrangeSpan>
              ) : (
                <OrangeSpan>
                  I briefly glance at the informed consent...{" "}
                </OrangeSpan>
              )}
            </>
          ) : (
            <>
              {game.readTerms ? (
                <span>
                  I thoroughly read the informed consent, but it is quite
                  complex and difficult to understand completely...{" "}
                </span>
              ) : (
                <span>I briefly glance at the informed consent... </span>
              )}
            </>
          )}
          {counter >= 1 ? (
            counter === 1 ? (
              <OrangeSpan>
                After reading it, I register with my mobile phone number and
                fill in the necessary information...{" "}
              </OrangeSpan>
            ) : (
              <span>
                After reading it, I register with my mobile phone number and
                fill in the necessary information...{" "}
              </span>
            )
          ) : null}
          {counter >= 2 ? (
            counter === 2 ? (
              <OrangeSpan>
                I am aware that in today's world of digital hyperconnectivity,
                the more information you disclose, the less privacy you're able
                to maintain...{" "}
              </OrangeSpan>
            ) : (
              <span>
                I am aware that in today's world of digital hyperconnectivity,
                the more information you disclose, the less privacy you're able
                to maintain...{" "}
              </span>
            )
          ) : null}
          {counter === 2 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 2 && (
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              marginLeft: "0",
              marginRight: "auto",
              width: "50%",
              height: "14.7%",
              top: "38em",
              margin: "0 auto",
              fontSize: "1vw",
              color: "white",
              zIndex: "102",
            }}
          >
            <CheckpointButton
              style={{ float: "right" }}
              onClick={nextCheckpoint}
            >
              Complete registration.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint4;
