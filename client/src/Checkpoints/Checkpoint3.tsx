import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NextButton, OrangeSpan, YellowSpan } from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint3 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervious);
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
        }}
      >
        {game.isHesitant ? (
          counter === 0 ? (
            <OrangeSpan>
              <YellowSpan>Allen:</YellowSpan> "
              <em>That's okay, I understand. Keep preparing then!</em>"
            </OrangeSpan>
          ) : (
            <span>
              <YellowSpan>Allen:</YellowSpan> "
              <em>That's okay, I understand. Keep preparing then!</em>"
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            <YellowSpan>Allen:</YellowSpan> "
            <em>
              Awesome! It'll definely help you get your mind off of these
              interviews
            </em>
            "
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
        )}
        {counter >= 1 ? (
          <>
            <br />
            {game.isHesitant ? (
              counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Could you at least download the app now even if you aren't
                    going to use it yet? I want to add you as a friend on it!
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Allen:</YellowSpan> "
                  <em>
                    Could you at least download the app now even if you aren't
                    going to use it yet? I want to add you as a friend on it!
                  </em>
                  "
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>When you get it, I want to add you as a friend on it!</em>"
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>When you get it, I want to add you as a friend on it!</em>"
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
                <em>Here, I'll send you a link to the app!</em>"
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>Here, I'll send you a link to the app!</em>"
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
            Download the social media app.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint3;