import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Context } from "../Shared/Context";
import { NextButton, OrangeSpan } from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint6 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted, backgroundMusic, setBackgroundMusic } = useContext(Context);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
    setBackgroundMusic("car");
    console.log(backgroundMusic);
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
    <div style={{ position: "relative" }}>
      <BackgroundImage
        src={require("../Assets/carbackground.png")}
        alt="carimage"
      />
      <CityGif src={require("../Assets/city.gif")} alt="city" />
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
          zIndex: "102",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            Looks like it's going to take a bit of time to get to this
            interview...{" "}
            <audio
              autoPlay={true}
              controls={false}
              loop={false}
              muted={isMuted}
              id="myAudio"
            >
              <source
                src={require("../Assets/Assets-Fangtai/Audio/SFX/Car_Start.wav")}
                type="audio/wav"
              />
            </audio>
          </OrangeSpan>
        ) : (
          <span>
            Looks like it's going to take a bit of time to get to this
            interview...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {game.isHesitant ? (
              counter === 1 ? (
                <OrangeSpan>
                  It is good that you spent some extra time preparing this
                  morning...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  It is good that you spent some extra time preparing this
                  morning...{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                Now is a good time to check out the app you just got!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Now is a good time to check out the app you just got!...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            {game.isHesitant ? (
              counter === 2 ? (
                <OrangeSpan>
                  You didn't want to get distracted by it before but now you
                  have some downtime on your way so check out that app!...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  You didn't want to get distracted by it before but now you
                  have some downtime on your way so check out that app!...{" "}
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                Open the app and see what it's like! Allen will be happy you
                checked it out...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Open the app and see what it's like! Allen will be happy you
                checked it out...{" "}
              </span>
            )}
          </>
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
              width: "100%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
            }}
            onClick={nextCheckpoint}
          >
            Open the Dystogram app.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint6;
