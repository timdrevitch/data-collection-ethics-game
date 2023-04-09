import axios from "axios";
import { useEffect, useState } from "react";
import {
  CheckpointButton,
  GreenSpan,
  LimeGreenSpan,
  NextButton,
  OrangeSpan,
  PurpleSpan,
  RedSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint10 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter + " useEffect");
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 4) {
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
            <YellowSpan>Interviewer:</YellowSpan> "
            <em>
              Hello <strong>{player.playername}</strong>! I have looked through
              your resume, portfolio, and anything else we could find about you.
            </em>
            "{" "}
          </OrangeSpan>
        ) : (
          <span>
            <YellowSpan>Interviewer:</YellowSpan> "
            <em>
              Hello <strong>{player.playername}</strong>! I have looked through
              your resume, portfolio, and anything else we could find about you.
            </em>
            "{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {game.readTerms ? (
              counter === 1 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    You've truly made a great impression on us! While this role
                    typically demands significant work experience, your
                    background as a computer science graduate and your robust
                    resume have caught our attention.
                  </em>
                  "{" "}
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    You've truly made a great impression on us! While this role
                    typically demands significant work experience, your
                    background as a computer science graduate and your robust
                    resume have caught our attention.
                  </em>
                  "{" "}
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  You've truly made a great impression on us! While this role
                  typically demands significant work experience, your background
                  as a computer science graduate and your robust resume have
                  caught our attention.
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  You've truly made a great impression on us! While this role
                  typically demands significant work experience, your background
                  as a computer science graduate and your robust resume have
                  caught our attention.
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            <br />
            {game.readTerms ? (
              counter === 2 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Your remarkable portfolio demonstrates your potential. We're
                    genuinely delighted that you decided to interview with our
                    company. Even if you do not get this job, we know you are a
                    good fit for this company.
                  </em>
                  "{" "}
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Your remarkable portfolio demonstrates your potential. We're
                    genuinely delighted that you decided to interview with our
                    company. Even if you do not get this job, we know you are a
                    good fit for this company.
                  </em>
                  "{" "}
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Even if you do not get this job, we know you are a good fit
                  for this company.
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Even if you do not get this job, we know you are a good fit
                  for this company.
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          <>
            <br />
            {game.postedAboutArt ? (
              counter === 3 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    For instance, we saw from our research that you are an
                    awesome artist. We have been trying to fill an illustrator
                    position for the longest time! Would you also be willing to
                    apply for that postion?
                  </em>
                  "{" "}
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    For instance, we saw from our research that you are an
                    awesome artist. We have been trying to fill an illustrator
                    position for the longest time! Would you also be willing to
                    apply for that postion?
                  </em>
                  "{" "}
                </span>
              )
            ) : counter === 3 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  We saw from our research that you are an awesome programmer. I
                  think you should be a very good fit for this position!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  We saw from our research that you are an awesome programmer. I
                  think you should be a very good fit for this position!
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {/* {counter >= 4 ? (
          <>
            <br />
            {game.postedAboutArt ? (
              counter === 4 ? (
                <OrangeSpan>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>
                    The problem is: Write a JavaScript function that loops
                    through an array of users and prints out their names.
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>
                    The problem is: Write a JavaScript function that loops
                    through an array of users and prints out their names.
                  </em>
                  "
                </span>
              )
            ) : counter === 4 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Sure, you can try. The problem is: Write a JavaScript function
                  that loops through an array of users and prints out their
                  names.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Sure, you can try. The problem is: Write a JavaScript function
                  that loops through an array of users and prints out their
                  names.
                </em>
                "
              </span>
            )}
          </>
        ) : null} */}
        {counter >= 4 ? (
          <>
            <br />
            {game.postedAboutArt ? (
              counter === 4 ? (
                <OrangeSpan>
                  An illustrator postition? I'm curious what led the interviewer
                  to believe I have a talent for that...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  An illustrator postition? I'm curious what led the interviewer
                  to believe I have a talent for that...{" "}
                </span>
              )
            ) : counter === 4 ? (
              <OrangeSpan>
                The interviewer seems to really like me! Maybe I have a chance
                at getting this position...{" "}
              </OrangeSpan>
            ) : (
              <span>
                The interviewer seems to really like me! Maybe I have a chance
                at getting this position...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter === 4 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 4 && (
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            height: "14.7%",
            top: "40em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          {game.postedAboutArt ? (
            <>
              {/* <CheckpointButton
                style={{
                  float: "left",
                  opacity: "40%",
                  cursor: "not-allowed",
                  fontSize: ".9vw",
                  paddingLeft: "7%",
                }}
                disabled
              >
                <em>
                  <RedSpan>Unavailable due to prior actions.</RedSpan>
                </em>
                <br />
              </CheckpointButton> */}
              <CheckpointButton
                style={{ float: "right", fontSize: ".9vw", paddingLeft: "7%" }}
                onClick={nextCheckpoint}
              >
                I appreciate your kind words. I am a pretty good artist, but
                wanted to try to get into my first programming position with
                this company.
                {/* <div>{"const printUsers = (users) => {"}</div>
                <div>&#160;&#160;{"users?.map((user,index) => ("}</div>
                <div>&#160;&#160;&#160;&#160;{"console.log(user.name);"}</div>
                <div>{"))};"}</div> */}
              </CheckpointButton>
            </>
          ) : (
            <>
              <CheckpointButton
                style={{ float: "right", fontSize: ".9vw", paddingLeft: "7%" }}
                onClick={nextCheckpoint}
              >
                I appreciate your kind words. I am excited to hear that I have
                impressed you!
                {/* <div>{"public void printUsers(String[] users) {"}</div>
                <div>
                  &#160;&#160;{"for (int i = 0; i < users.length; i++) {"}
                </div>
                <div>
                  &#160;&#160;&#160;&#160;{"System.out.println(users[i]);"}
                </div>
                <div>{"}}"}</div> */}
              </CheckpointButton>
              {/* <CheckpointButton
                style={{
                  float: "right",
                  opacity: "40%",
                  cursor: "not-allowed",
                  fontSize: ".9vw",
                  paddingLeft: "7%",
                }}
                disabled
              >
                <em>
                  <RedSpan>Unavailable due to prior actions.</RedSpan>
                </em>
                <br />
                <div>{"const printUsers = (users) => {"}</div>
                <div>&#160;&#160;{"users?.map((user,index) => ("}</div>
                <div>&#160;&#160;&#160;&#160;{"console.log(user.name);"}</div>
                <div>{"))};"}</div>
              </CheckpointButton> */}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkpoint10;
