import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NextButton, OrangeSpan, YellowSpan } from "../Styles/SharedStyles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";
import { Context } from "../Shared/Context";

const Checkpoint2 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted } = useContext(Context);

  useEffect(() => {
    console.log(counter + " useEffect");
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 5) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (isHesitantChoice: boolean) => {
    let data = { isHesitantChoice: isHesitantChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
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
            top: "8em",
            marginLeft: "5%",
            fontSize: "2vw",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
            zIndex: "102",
          }}
        >
          {counter === 0 ? (
            <OrangeSpan>
              It's a message from your best friend Allen...{" "}
            </OrangeSpan>
          ) : (
            <span>It's a message from your best friend Allen... </span>
          )}
          {counter >= 1 ? (
            <>
              <br />
              {counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Good luck today! I know you prepared for these interviews so
                    much. You'll do great!
                  </em>
                  "
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
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Good luck today! I know you prepared for these interviews so
                    much. You'll do great!
                  </em>
                  "
                </span>
              )}
            </>
          ) : null}
          {counter >= 2 ? (
            <>
              <br />
              {counter === 2 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Also, I know you too well. You are definitely already awake
                    and {game.isNervous ? "stressed." : "preparing more."}
                  </em>
                  "{" "}
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
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Also, I know you too well. You are definitely already awake
                    and {game.isNervous ? "stressed." : "preparing more."}
                  </em>
                  "{" "}
                </span>
              )}
            </>
          ) : null}
          {counter >= 3 ? (
            <>
              <br />
              {counter === 3 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    By the way, I just got this new social media app that I want
                    you to try!
                  </em>
                  "{" "}
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
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    By the way, I just got this new social media app that I want
                    you to try!
                  </em>
                  "{" "}
                </span>
              )}
            </>
          ) : null}
          {counter >= 4 ? (
            <>
              <br />
              {counter === 4 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    {game.isNervous
                      ? "You should download it! Maybe it'll be a nice distraction from all this stress before the interviews."
                      : "You've easily prepared enough already. You should take a break from preparing and download it!"}
                  </em>
                  "{" "}
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
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    {game.isNervous
                      ? "You should download it! Maybe it'll be a nice distraction from all this stress before the interviews."
                      : "You've easily prepared enough already. You should take a break from preparing and download it!"}
                  </em>
                  "{" "}
                </span>
              )}
            </>
          ) : null}
          {counter >= 5 ? (
            <>
              <br />
              {counter === 5 ? (
                <OrangeSpan>
                  What would you like to respond with?...{" "}
                </OrangeSpan>
              ) : (
                <span>What would you like to respond with?... </span>
              )}
            </>
          ) : null}
          {counter === 5 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 5 && (
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              height: "10%",
              top: "35em",
              margin: "0 auto",
              fontSize: "1vw",
              color: "white",
              zIndex: "102",
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
              onClick={() => nextCheckpoint(true)}
            >
              You: "It sounds cool but I should keep studying more before I have
              to leave for the first interview today."
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
              onClick={() => nextCheckpoint(false)}
            >
              You: "I know I have studied a lot already. I'll check it out.
              Maybe it'll be a good little distraction before this long day
              ahead!"
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint2;
