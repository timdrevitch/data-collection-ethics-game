import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
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
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 2) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = () => {
    //let data = { isHesitantChoice: isHesitantChoice };
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
            top: "8em",
            marginLeft: "5%",
            fontSize: "2vw",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
            zIndex: "102",
          }}
        >
          {counter === 0 ? (
            <OrangeSpan>
              I attempt to refocus on my interview preparation, but my mind
              fills with the exhilarating moments from the party a few days
              ago...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I attempt to refocus on my interview preparation, but my mind
              fills with the exhilarating moments from the party a few days
              ago...{" "}
            </span>
          )}
          {counter >= 1 ? (
            counter === 1 ? (
              // <OrangeSpan>Why have you not been able to sleep?... </OrangeSpan>
              <OrangeSpan>
                I fear missing out on the captured memories within those
                photographs...{" "}
              </OrangeSpan>
            ) : (
              <span>
                I fear missing out on the captured memories within those
                photographs...{" "}
              </span>
            )
          ) : null}
          {/* {counter >= 1 ? (
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
          ) : null} */}
          {counter >= 2 ? (
            counter === 2 ? (
              // <OrangeSpan>Why have you not been able to sleep?... </OrangeSpan>
              <OrangeSpan>
                They were the last good times of college with my friends, some
                of which I may never see again...{" "}
              </OrangeSpan>
            ) : (
              <span>
                They were the last good times of college with my friends, some
                of which I may never see again...{" "}
              </span>
            )
          ) : null}
          {/* {counter >= 2 ? (
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
          ) : null} */}
          {/* {counter >= 3 ? (
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
          ) : null} */}
          {/* {counter >= 4 ? (
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
          ) : null} */}
          {/* {counter >= 5 ? (
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
          ) : null} */}
          {counter === 2 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 2 && (
          //       <div
          //         style={{
          //           position: "absolute",
          //           left: "0",
          //           right: "0",
          //           marginLeft: "auto",
          //           marginRight: "auto",
          //           width: "50%",
          //           height: "14.7%",
          //           top: "38em",
          //           margin: "0 auto",
          //           fontSize: "1vw",
          //           color: "white",
          //           zIndex: "102",
          //         }}
          //       >
          //         <CheckpointButton
          //           style={{ float: "left" }}
          //           onClick={() => nextCheckpoint(true)}
          //         >
          //           You: "It sounds cool but I should keep studying more before I have
          //           to leave for the first interview today."
          //         </CheckpointButton>
          //         <CheckpointButton
          //           style={{ float: "right" }}
          //           onClick={() => nextCheckpoint(false)}
          //         >
          //           You: "I know I have studied a lot already. I'll check it out.
          //           Maybe it'll be a good little distraction before this long day
          //           ahead!"
          //         </CheckpointButton>
          //       </div>
          //     )}
          //   </div>
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
              You are finding it hard to concentrate. Pick up your phone again.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint2;
