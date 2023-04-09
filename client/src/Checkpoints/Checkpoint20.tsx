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

const Checkpoint20 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 1) {
      console.log(event.key);
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (commentChoice: boolean) => {
    let data = { commentChoice: commentChoice };
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
          top: "8em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {game.askedAboutSearch ? (
          <>
            <br />
            {counter === 0 ? (
              <>
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Nick brought up that an old classmate had been viewing his
                    content for a long time today. He mentioned you both
                    attended college together and that you possess exceptional
                    professional expertise. He was absolutely correct.
                  </em>
                  "{" "}
                </OrangeSpan>
              </>
            ) : (
              <>
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Nick brought up that an old classmate had been viewing his
                    content for a long time today. He mentioned you both
                    attended college together and that you possess exceptional
                    professional expertise. He was absolutely correct.
                  </em>
                  "{" "}
                </span>
              </>
            )}
          </>
        ) : (
          <>
            <br />
            {counter === 0 ? (
              <>
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    We believe that anyone with a reasonable disposition can
                    succeed here. And naturally, we highly value honesty in our
                    team members.
                  </em>
                  "{" "}
                </OrangeSpan>
              </>
            ) : (
              <>
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    We believe that anyone with a reasonable disposition can
                    succeed here. And naturally, we highly value honesty in our
                    team members.
                  </em>
                  "{" "}
                </span>
              </>
            )}
          </>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {game.askedAboutSearch ? (
              counter === 1 ? (
                <>
                  <OrangeSpan>
                    <YellowSpan>Interviewer:</YellowSpan> "
                    <em>
                      Moreover, your professional skill set is quite remarkable.
                      I understand that multiple companies are conducting
                      interviews today. Have you attended any others? If so, how
                      do they compare to us?
                    </em>
                    "{" "}
                  </OrangeSpan>
                </>
              ) : (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Moreover, your professional skill set is quite remarkable. I
                    understand that multiple companies are conducting interviews
                    today. Have you attended any others? If so, how do they
                    compare to us?
                  </em>
                  "{" "}
                </OrangeSpan>
              )
            ) : counter === 1 ? (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Moreover, your professional skill set is quite remarkable. I
                  understand that multiple companies are conducting interviews
                  today. Have you attended any others? If so, how do they
                  compare to us?
                </em>
                "{" "}
              </span>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Moreover, your professional skill set is quite remarkable. I
                  understand that multiple companies are conducting interviews
                  today. Have you attended any others? If so, how do they
                  compare to us?
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter === 1 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 1 && (
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
            "I really like this place so far, so I came to this company."
          </CheckpointButton>
          <CheckpointButton
            style={{ float: "right", height: "100%", width: "40%" }}
            onClick={() => nextCheckpoint(true)}
          >
            "I visited two companies, but I like what I see here so far.”
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint20;
