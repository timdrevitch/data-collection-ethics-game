import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Context } from "../Shared/Context";
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
          zIndex: "102",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            I hop into the self-driving car, input the destination, and the car
            begins its journey...{" "}
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
            I hop into the self-driving car, input the destination, and the car
            begins its journey...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {counter === 1 ? (
              <>
                <OrangeSpan>
                  Looks like I have a new notification from Dystogram...{" "}
                </OrangeSpan>
                <audio
                  autoPlay={true}
                  controls={false}
                  loop={false}
                  muted={isMuted}
                  id="myAudio"
                >
                  <source
                    src={require("../Assets/Assets-Fangtai/Audio/SFX/New_DystogramChat.wav")}
                    type="audio/wav"
                  />
                </audio>
              </>
            ) : (
              <span>
                Looks like I have a new notification from Dystogram...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            {counter === 2 ? (
              <OrangeSpan>
                I have time to check what it is while the car brings me to this
                interview...{" "}
              </OrangeSpan>
            ) : (
              <span>
                I have time to check what it is while the car brings me to this
                interview...{" "}
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
            Open the Dystogram app.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint6;
