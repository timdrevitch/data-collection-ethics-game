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
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint1 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted } = useContext(Context);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 2) {
      console.log(event.key);
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
          src={require("../Assets/Bedroom.png")}
          alt="bedroomimage"
        />
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
          {game.isNervous ? (
            counter === 0 ? (
              <OrangeSpan>
                You are nervous after all. Don't stress. You have been preparing
                all month!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                You are nervous after all. Don't stress. You have been preparing
                all month!...{" "}
              </span>
            )
          ) : counter === 0 ? (
            <OrangeSpan>
              It is good that you aren't nervous! You don't want to be stressed
              going into these interviews...{" "}
            </OrangeSpan>
          ) : (
            <span>
              It is good that you aren't nervous! You don't want to be stressed
              going into these interviews...{" "}
            </span>
          )}
          {counter >= 1 ? (
            counter === 1 ? (
              <OrangeSpan>
                <em>Ding... </em>
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
              </OrangeSpan>
            ) : (
              <span>
                <em>Ding... </em>
              </span>
            )
          ) : null}
          {counter >= 2 ? (
            counter === 2 ? (
              <OrangeSpan>
                Why did you just get a text? It's so early. Who could be up?...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Why did you just get a text? It's so early. Who could be up?...{" "}
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
              See who messaged you.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint1;
