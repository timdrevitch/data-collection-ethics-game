import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NextButton, OrangeSpan } from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint5 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervious);
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
        style={{
          height: "55vw",
        }}
        src={require("../Assets/Bedroom.png")}
        alt="bedroomimage"
      />
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
          <OrangeSpan>Nice! Dystogram is downloaded... </OrangeSpan>
        ) : (
          <span>Nice! Dystogram is downloaded... </span>
        )}
        {counter >= 1 ? (
          <>
            {game.isHesitant ? (
              counter === 1 ? (
                <OrangeSpan>
                  You've been very focused on preparing for your interviews and
                  you want to keep preparing...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  You've been very focused on preparing for your interviews and
                  you want to keep preparing...{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                Now that you have it, you should check it out! Add Allen on
                it!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Now that you have it, you should check it out! Add Allen on
                it!...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            {game.isHesitant ? (
              counter === 2 ? (
                <OrangeSpan>
                  Keep studying! Maybe you can check out the app in the car on
                  the way to the first interview. After you are done preparing
                  more, head to your first interview!...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  Keep studying! Maybe you can check out the app in the car on
                  the way to the first interview. After you are done preparing
                  more, head to your first interview!...{" "}
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                Time flew by! How is it already time to leave for your first
                interview? Check out the app in the car on the way!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Time flew by! How is it already time to leave for your first
                interview? Check out the app in the car on the way!...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          <>
            {game.isHesitant ? (
              counter === 3 ? (
                <OrangeSpan>
                  It's going to be starting soon and you don't want to be late.
                  Good thing you have one of those self-driving cars so you can
                  use your phone on the way!...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  It's going to be starting soon and you don't want to be late.
                  Good thing you have one of those self-driving cars so you can
                  use your phone on the way!...{" "}
                </span>
              )
            ) : counter === 3 ? (
              <OrangeSpan>
                Good thing you have one of those self-driving cars so you are
                able to go on your phone on the way!...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Good thing you have one of those self-driving cars so you are
                able to go on your phone on the way!...{" "}
              </span>
            )}
          </>
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
            Get in your car and head to your first interview.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint5;
