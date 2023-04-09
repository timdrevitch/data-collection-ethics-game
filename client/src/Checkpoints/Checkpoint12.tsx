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
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint12 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted } = useContext(Context);

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
          <>
            <OrangeSpan>
              I leave the first company and get into a self-driving car to head
              over to my second interview with the other company...{" "}
            </OrangeSpan>
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
          </>
        ) : (
          <span>
            I leave the first company and get into a self-driving car to head
            over to my second interview with the other company...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {game.postedAboutArt ? (
              counter === 1 ? (
                <OrangeSpan>
                  I can't help but feel puzzled about why the interviewer
                  unexpectedly brought up art. Made no sense at all...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  I can't help but feel puzzled about why the interviewer
                  unexpectedly brought up art. Made no sense at all...{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                Hopefully I get that job. They seemed to really like me...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Hopefully I get that job. They seemed to really like me...{" "}
              </span>
            )}
          </>
        ) : null}
        {/* {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              It's good that you finished the first interview though, the
              self-driving car is bringing you to your other interview now!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              It's good that you finished the first interview though, the
              self-driving car is bringing you to your other interview now!...{" "}
            </span>
          )
        ) : null} */}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              Oh, looks like I have another message from Allen! I should let him
              know how it went!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Oh, looks like I have another message from Allen! I should let him
              know how it went!...{" "}
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
            height: "13%",
            top: "38em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          <CheckpointButton style={{ float: "right" }} onClick={nextCheckpoint}>
            Open message.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint12;
