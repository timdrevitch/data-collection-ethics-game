import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
} from "../Styles/TitleScreenStyles";

const Checkpoint11 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

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
    <div style={{ position: "relative" }}>
      <BackgroundImage
        style={{
          height: "55vw",
        }}
        src={require("../Assets/interview2.jpg")}
        alt="interviewbackground"
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
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        <>
          {game.postedAboutArt ? (
            counter === 0 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>Okay that is fine. No worries.</em>"{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>Okay that is fine. No worries.</em>"{" "}
              </span>
            )
          ) : counter === 0 ? (
            <OrangeSpan>
              <YellowSpan>Interviewer:</YellowSpan> "
              <em>
                No need to thank me! You put together a great resume that really
                showcased your skills.
              </em>
              "{" "}
            </OrangeSpan>
          ) : (
            <span>
              <YellowSpan>Interviewer:</YellowSpan> "
              <em>
                No need to thank me! You put together a great resume that really
                showcased your skills.
              </em>
              "{" "}
            </span>
          )}
        </>
        {counter >= 1 ? (
          <>
            <br />
            {game.postedAboutArt ? (
              counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Thank you for coming in! We'll be reaching out with the
                    results in the near future. Good luck!
                  </em>
                  "{" "}
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Thank you for coming in! We'll be reaching out with the
                    results in the near future. Good luck!
                  </em>
                  "{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Thank you for coming in! We'll be reaching out with the
                  results in the near future. Good luck!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Thank you for coming in! We'll be reaching out with the
                  results in the near future. Good luck!
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            <br />
            {game.postedAboutArt ? (
              counter === 2 ? (
                <OrangeSpan>
                  The illustrator thing was weird, but other than that this
                  interview was pretty good I think...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  The illustrator thing was weird, but other than that this
                  interview was pretty good I think...{" "}
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                This interview was pretty good I think...{" "}
              </OrangeSpan>
            ) : (
              <span>This interview was pretty good I think... </span>
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
            height: "14.7%",
            top: "38em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          <CheckpointButton style={{ float: "right" }} onClick={nextCheckpoint}>
            Get back in your self-driving car.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint11;
