import axios from "axios";
import { useEffect, useState } from "react";
import {
  CheckpointButton,
  GreenSpan,
  LimeGreenSpan,
  NextButton,
  OrangeSpan,
  PurpleSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint19 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter + " useEffect");
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 7) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (askedAboutSearchChoice: boolean) => {
    let data = { askedAboutSearchChoice: askedAboutSearchChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
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
        alt="interviewroomimage"
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
          top: "5.5em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            The interviewer reviewed my resume and portfolio and asked me to
            complete some professional test questions. The topic I tackled was
            familiar, so it didn't feel difficult...{" "}
          </OrangeSpan>
        ) : (
          <span>
            The interviewer reviewed my resume and portfolio and asked me to
            complete some professional test questions. The topic I tackled was
            familiar, so it didn't feel difficult...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {counter === 1 ? (
              <OrangeSpan>
                I was then asked some follow up questions...{" "}
              </OrangeSpan>
            ) : (
              <span>I was then asked some follow up questions... </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            <br />
            {counter === 2 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Are you engaged with the trending social app, Dystogram, by
                  any chance?
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Are you engaged with the trending social app, Dystogram, by
                  any chance?
                </em>
                "{" "}
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>
              <LimeGreenSpan>You:</LimeGreenSpan> "
              <em>I do have an account, yes. Why do you ask?</em>"{" "}
            </OrangeSpan>
          ) : (
            <span>
              <LimeGreenSpan>You:</LimeGreenSpan> "
              <em>I do have an account, yes. Why do you ask?</em>"{" "}
            </span>
          )
        ) : null}
        {counter >= 4 ? (
          <>
            <br />
            {counter === 4 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  It's no surprise, our manager Nick recognized you. He
                  mentioned that your expertise must be top-notch, and he wasn't
                  wrong. He mentioned that you were looking him up today.
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  It's no surprise, our manager Nick recognized you. He
                  mentioned that your expertise must be top-notch, and he wasn't
                  wrong. He mentioned that you were looking him up today.
                </em>
                "{" "}
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 5 ? (
          <>
            {counter === 5 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Yes, I went to school with Nick! He was a couple grades ahead
                  of me. Smart guy!
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Yes, I went to school with Nick! He was a couple grades ahead
                  of me. Smart guy!
                </em>
                "
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 6 ? (
          <>
            {counter === 6 ? (
              <OrangeSpan>
                How did Nick see that I looked him up today? I didn't follow him
                or message him. This is so strange.
              </OrangeSpan>
            ) : (
              <span>
                How did Nick see that I looked him up today? I didn't follow him
                or message him. This is so strange.
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 7 ? (
          <>
            {counter === 7 ? (
              <OrangeSpan>Choose a response... </OrangeSpan>
            ) : (
              <span>Choose a response... </span>
            )}
          </>
        ) : null}
        {counter === 7 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 7 && (
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
            Are there any specific character requirements for this position?
          </CheckpointButton>
          <CheckpointButton
            style={{ float: "right", height: "100%", width: "40%" }}
            onClick={() => nextCheckpoint(true)}
          >
            What did you mean when you said he saw me looking him up?
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint19;
