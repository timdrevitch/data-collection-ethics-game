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

const Checkpoint12 = ({ url, game, render, setRender }) => {
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
        }}
      >
        {game.readTerms ? (
          counter === 0 ? (
            <OrangeSpan>
              That interviewer didn't even noticed that you were young and not
              that experienced yet! Most jobs want older people who have more
              experience so thats good!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              That interviewer didn't even noticed that you were young and not
              that experienced yet! Most jobs want older people who have more
              experience so thats good!...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            How did that interviewer even know that you only graduated recently
            and haven't been very experienced yet? You purposely didn't put that
            in your resume...{" "}
          </OrangeSpan>
        ) : (
          <span>
            How did that interviewer even know that you only graduated recently
            and haven't been very experienced yet? You purposely didn't put that
            in your resume...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {game.isHesitant ? (
              counter === 1 ? (
                <OrangeSpan>
                  It was lucky that you did a problem similar to that interview
                  question this morning! You probably impressed the
                  interviewer...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  It was lucky that you did a problem similar to that interview
                  question this morning! You probably impressed the
                  interviewer...{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                Maybe you needed to have studied more questions before hand. You
                solved that interview question, but you used Java instead of
                JavaScript...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Maybe you needed to have studied more questions before hand. You
                solved that interview question, but you used Java instead of
                JavaScript...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
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
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>
              Oh, looks like you have another message from Allen! Let him know
              how it went!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Oh, looks like you have another message from Allen! Let him know
              how it went!...{" "}
            </span>
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
            Open message.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint12;
