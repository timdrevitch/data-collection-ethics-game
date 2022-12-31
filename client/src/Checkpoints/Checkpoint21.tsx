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

const Checkpoint21 = ({ url, game, render, setRender }) => {
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
        {game.commentIncludesInterviewCount ? (
          counter === 0 ? (
            <OrangeSpan>
              Why did that interviewer mention how many interviews you had
              today. You definitely didn't tell him that information...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Why did that interviewer mention how many interviews you had
              today. You definitely didn't tell him that information...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            That interviewer was very friendly at the start of that interview...{" "}
          </OrangeSpan>
        ) : (
          <span>
            That interviewer was very friendly at the start of that interview...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {game.postIsGood ? (
              counter === 1 ? (
                <OrangeSpan>
                  The interviewer seemed to really like your full-stack skills.
                  Maybe because your blog app is full-stack...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  The interviewer seemed to really like your full-stack skills.
                  Maybe because your blog app is full-stack...{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                The interviewer knows you prefer front end work. The question
                is... how? You know how to do back end work too...{" "}
              </OrangeSpan>
            ) : (
              <span>
                The interviewer knows you prefer front end work. The question
                is... how? You know how to do back end work too...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              You've finished both interviews now, it's got to feel good to be
              done...{" "}
            </OrangeSpan>
          ) : (
            <span>
              You've finished both interviews now, it's got to feel good to be
              done...{" "}
            </span>
          )
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>
              Message Allen! Let him know how this one went!...{" "}
            </OrangeSpan>
          ) : (
            <span>Message Allen! Let him know how this one went!... </span>
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
            Message Allen.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint21;
