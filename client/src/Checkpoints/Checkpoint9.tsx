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
      {/* <PhoneImage src={require("../Assets/phoneBg.png")} alt="phone" />
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
          src={require("../Assets/favicon.jpeg")}
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
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            Sweet, looks like you got signed up on the Dystogram app...{" "}
          </OrangeSpan>
        ) : (
          <span>
            Sweet, looks like you got signed up on the Dystogram app...{" "}
          </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>
              You are finally arriving at your first interview though, tell
              Allen that you got signed up after the interview...{" "}
            </OrangeSpan>
          ) : (
            <span>
              You are finally arriving at your first interview though, tell
              Allen that you got signed up after the interview...{" "}
            </span>
          )
        ) : null}
        {counter >= 2 ? (
          <>
            {game.isNervous ? (
              counter === 2 ? (
                <OrangeSpan>
                  You were nervous this morning, but you are definitely going to
                  do great! Don't be stressed!...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  You were nervous this morning, but you are definitely going to
                  do great! Don't be stressed!...{" "}
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                You weren't nervous this morning, and you still don't look
                nervous, you'll do great!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                You weren't nervous this morning, and you still don't look
                nervous, you'll do great!...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>Put your game face on and get in there!... </OrangeSpan>
          ) : (
            <span>Put your game face on and get in there!... </span>
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
