import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Context } from "../Shared/Context";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
  DarkFooter3,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint3 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted } = useContext(Context);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
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

        {counter === 1 ? (
          <>
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
              ********************************* To use this app, you must
              specify that you agree to the following terms of use and
              acknowledge all copyright and privacy details and concerns.
              ********************************* These include, but are not
              limited to: ********************************* <em>Dystogram</em>'s
              Privacy Polocies (P1A-P42F) <em>Dystogram</em>'s Personal Data
              Sharing Polocies (D1A-D23B) <em>Dystogram</em>'s Harassment and
              Bulying Polocies (H1A-H16G) <em>Dystogram</em>'s Use Protection
              Clauses (U1A-U3C) <em>Dystogram</em>'s Data Collection Methods
              Polocies (C1A-C30D) <em>Dystogram</em>'s Photo and Video Sharing
              Polocies (C1A-C30D) <em>Dystogram</em>'s Govt. Complience &
              Involvement Procedureal Polocies (G1A-G55I) <em>Dystogram</em>'s
              Harassment and Bulying Polocies V2 (H1A-H16G) <em>Dystogram</em>'s
              Use Protection Clauses V2 (U1A-U3C)...
            </PlayerSinceContainer>
            <PhoneImage src={require("../Assets/phoneNoBg.png")} alt="phone" />
          </>
        ) : (
          <>
            <PhoneImage src={require("../Assets/hand.png")} alt="phone" />
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
            </PlayerSinceContainer>
          </>
        )}
        {/* <WelcomePlayerContainer
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
        <DarkFooter></DarkFooter>
        <DarkFooter2></DarkFooter2>
        <DarkFooter3></DarkFooter3>
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
          {/* {game.isHesitant ? ( */}
          <br />
          <br />
          {counter === 0 ? (
            <OrangeSpan>
              I see the Dystogram social media app Allen told me to get...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I see the Dystogram social media app Allen told me to get...{" "}
            </span>
          )}
          {/* ) : counter === 0 ? (
            <OrangeSpan>
              <YellowSpan>Allen:</YellowSpan> "
              <em>
                Awesome! It'll definely help you get your mind off of these
                interviews
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
                Awesome! It'll definely help you get your mind off of these
                interviews
              </em>
              "
            </span>
          )} */}
          {counter >= 1 ? (
            <>
              <br />
              {counter === 1 ? (
                <OrangeSpan>
                  Upon opening Dystogram, the app asks me to read the informed
                  consent and tick the box...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  Upon opening Dystogram, the app asks me to read the informed
                  consent and tick the box...{" "}
                </span>
              )}
            </>
          ) : null}
          {/* : counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>When you get it, I want to add you as a friend on it!</em>
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
                  <em>When you get it, I want to add you as a friend on it!</em>
                  "
                </span>
              )}
            </> */}
          {/* ) : null} */}
          {/* {counter >= 2 ? (
            <>
              <br />
              {counter === 2 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>Here, I'll send you a link to the app!</em>"
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
                  <em>Here, I'll send you a link to the app!</em>"
                </span>
              )}
            </>
          ) : null} */}
          {counter === 1 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 1 && (
          // <div
          //   style={{
          //     position: "absolute",
          //     left: "0",
          //     right: "0",
          //     marginLeft: "0",
          //     marginRight: "auto",
          //     width: "50%",
          //     height: "14.7%",
          //     top: "38em",
          //     margin: "0 auto",
          //     fontSize: "1vw",
          //     color: "white",
          //     zIndex: "102",
          //   }}
          // >
          //   <CheckpointButton
          //     style={{ float: "right" }}
          //     onClick={nextCheckpoint}
          //   >
          //     Download the social media app.
          //   </CheckpointButton>
          // </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              marginLeft: "auto",
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
            <CheckpointButton
              style={{ float: "left", height: "100%", width: "40%" }}
              onClick={() => nextCheckpoint(false)}
            >
              Accept the Terms of Service.
            </CheckpointButton>
            <CheckpointButton
              style={{ float: "right", height: "100%", width: "40%" }}
              onClick={() => nextCheckpoint(true)}
            >
              Read the Terms of Service.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint3;
