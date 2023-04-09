import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint9 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 3) {
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
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            Sweet, looks like I made my first post Dystogram app...{" "}
          </OrangeSpan>
        ) : (
          <span>Sweet, looks like I made my first post Dystogram app... </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>
              I am finally arriving at my first interview though. I can check
              back on it after the interview...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I am finally arriving at my first interview though. I can check
              back on it after the interview...{" "}
            </span>
          )
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              The self-driving car pulls up outside the company's building...{" "}
            </OrangeSpan>
          ) : (
            <span>
              The self-driving car pulls up outside the company's building...{" "}
            </span>
          )
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>
              I need to put my game face on and get in there!...{" "}
            </OrangeSpan>
          ) : (
            <span>I need to put my game face on and get in there!... </span>
          )
        ) : null}
        {counter === 3 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 3 && (
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "0",
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
          <CheckpointButton style={{ float: "right" }} onClick={nextCheckpoint}>
            Go to your first interview.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint9;
