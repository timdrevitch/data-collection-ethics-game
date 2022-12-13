import axios from "axios";
import { useEffect, useState } from "react";
import {
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
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 6) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (apiQuestionChoice: boolean) => {
    let data = { apiQuestionChoice: apiQuestionChoice };
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
        src={require("../Assets/interviewBg.jpeg")}
        alt="interviewroomimage"
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
          top: "5.5em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            <YellowSpan>Interviewer:</YellowSpan> "
            <em>
              Welcome <strong>{player.playername}</strong>! It is nice to meet
              you.
            </em>
            "{" "}
          </OrangeSpan>
        ) : (
          <span>
            <YellowSpan>Interviewer:</YellowSpan> "
            <em>
              Welcome <strong>{player.playername}</strong>! It is nice to meet
              you.
            </em>
            "{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {game.commentIncludesInterviewCount ? (
              counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    This is your second interview of the day? You must be
                    getting tired.
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    This is your second interview of the day? You must be
                    getting tired.
                  </em>
                  "
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  How has your day been going? We are exicited to learn more
                  about you.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  How has your day been going? We are exicited to learn more
                  about you.
                </em>
                "
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              <YellowSpan>Interviewer:</YellowSpan> "
              <em>
                We are looking for someone who has a lot of experience with
                full-stack applications. The person we hire will most likely
                need to do work on the front end and the back end of our
                projects.
              </em>
              "
            </OrangeSpan>
          ) : (
            <span>
              <YellowSpan>Interviewer:</YellowSpan> "
              <em>
                We are looking for someone who has a lot of experience with
                full-stack applications. The person we hire will most likely
                need to do work on the front end and the back end of our
                projects.
              </em>
              "
            </span>
          )
        ) : null}
        {counter >= 3 ? (
          <>
            <br />
            {game.postIsGood ? (
              counter === 3 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    I saw somewhere that you made a blog website detailing your
                    programming journey. I was impressed that you were able to
                    let users sign up. That shows me that you know how to do
                    some full-stack developing.
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    I saw somewhere that you made a blog website detailing your
                    programming journey. I was impressed that you were able to
                    let users sign up. That shows me that you know how to do
                    some full-stack developing.
                  </em>
                  "
                </span>
              )
            ) : counter === 3 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  I saw somewhere that you are really good at designing a good
                  front end. Have you ever worked with a backend before?
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  I saw somewhere that you are really good at designing a good
                  front end. Have you ever worked with a backend before?
                </em>
                "
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 4 ? (
          <>
            {game.postIsGood ? (
              counter === 4 ? (
                <OrangeSpan>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>
                    It was cool that I got that working. I have gotten really
                    good at the front end and the back end!
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>
                    It was cool that I got that working. I have gotten really
                    good at the front end and the back end!
                  </em>
                  "
                </span>
              )
            ) : counter === 4 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Although I am really good at the front end designs, I have
                  worked with back ends before.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Although I am really good at the front end designs, I have
                  worked with back ends before.
                </em>
                "
              </span>
            )}
            <br />
          </>
        ) : null}
        {counter >= 5 ? (
          <>
            {game.postIsGood ? (
              counter === 5 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    I believe it! Could you do answer a quick question just to
                    show me how good you are at it? The question is: if you
                    wanted to update data in a database, which REST operation
                    would you use?
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    I believe it! Could you do answer a quick question just to
                    show me how good you are at it? The question is: if you
                    wanted to update data in a database, which REST operation
                    would you use?
                  </em>
                  "
                </span>
              )
            ) : counter === 5 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Could you answer a question to show me how well you know
                  full-stack? The question is: if you wanted to update data in a
                  database, which REST operation would you use?
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Could you answer a question to show me how well you know
                  full-stack? The question is: if you wanted to update data in a
                  database, which REST operation would you use?
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
              <OrangeSpan>Choose a response... </OrangeSpan>
            ) : (
              <span>Choose a response... </span>
            )}
          </>
        ) : null}
        {counter === 6 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 6 && (
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            height: "12%",
            top: "39em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              float: "left",
              width: "20%",
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
            "Create"
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "right",
              width: "20%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
              marginLeft: "6.5%",
            }}
            onClick={() => nextCheckpoint(false)}
          >
            "Get"
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "left",
              width: "20%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
              marginLeft: "6.5%",
            }}
            onClick={() => nextCheckpoint(true)}
          >
            "Put"
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "right",
              width: "20%",
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
            "Delete"
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint19;
