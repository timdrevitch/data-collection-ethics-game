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
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 5) {
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
                    It seems that you graduated with a degree in Computer
                    Science at some point, that's good!
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    It seems that you graduated with a degree in Computer
                    Science at some point, that's good!
                  </em>
                  "
                </span>
              )
            ) : counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  It seems that you just recently graduated with a degree in
                  Computer Science and are pretty young and new to the industry.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  It seems that you just recently graduated with a degree in
                  Computer Science and are pretty young and new to the industry.
                </em>
                "
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
                    We are looking for someone who knows what they are doing and
                    has many years of experience, so I'll have you do a problem
                    and see how you do.
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    We are looking for someone who knows what they are doing and
                    has many years of experience, so I'll have you do a problem
                    and see how you do.
                  </em>
                  "
                </span>
              )
            ) : counter === 2 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  We are looking for someone who knows what they are doing and
                  has many years of experience, since you are pretty young this
                  might not be a good fit for you.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  We are looking for someone who knows what they are doing and
                  has many years of experience, since you are pretty young this
                  might not be a good fit for you.
                </em>
                "
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          <>
            <br />
            {game.readTerms ? (
              counter === 3 ? (
                <OrangeSpan>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>Okay what is the problem?</em>"
                </OrangeSpan>
              ) : (
                <span>
                  <LimeGreenSpan>You:</LimeGreenSpan> "
                  <em>Okay what is the problem?</em>"
                </span>
              )
            ) : counter === 3 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Could I at least do a problem to show off my skills to show
                  that I am just as good as the people that have been doing it
                  longer?
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  Could I at least do a problem to show off my skills to show
                  that I am just as good as the people that have been doing it
                  longer?
                </em>
                "
              </span>
            )}
          </>
        ) : null}
        {counter >= 4 ? (
          <>
            <br />
            {game.readTerms ? (
              counter === 4 ? (
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    The problem is: Write a JavaScript function that loops
                    through an array of users and prints out their names.
                  </em>
                  "
                </OrangeSpan>
              ) : (
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    The problem is: Write a JavaScript function that loops
                    through an array of users and prints out their names.
                  </em>
                  "
                </span>
              )
            ) : counter === 4 ? (
              <OrangeSpan>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Sure, you can try. The problem is: Write a JavaScript function
                  that loops through an array of users and prints out their
                  names.
                </em>
                "
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Interviewer:</YellowSpan> "
                <em>
                  Sure, you can try. The problem is: Write a JavaScript function
                  that loops through an array of users and prints out their
                  names.
                </em>
                "
              </span>
            )}
          </>
        ) : null}
        {counter >= 5 ? (
          <>
            <br />
            {game.isHesitant ? (
              counter === 5 ? (
                <OrangeSpan>
                  Good thing you waited to go on that app until after you got
                  more studying done earlier. You just practiced something like
                  this this morning!...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  Good thing you waited to go on that app until after you got
                  more studying done earlier. You just practiced something like
                  this this morning!...{" "}
                </span>
              )
            ) : counter === 5 ? (
              <OrangeSpan>
                Hmm, weren't you going to study a question similar to this this
                morning? Maybe you should have done more studying before going
                on that app...{" "}
              </OrangeSpan>
            ) : (
              <span>
                Hmm, weren't you going to study a question similar to this this
                morning? Maybe you should have done more studying before going
                on that app...{" "}
              </span>
            )}
          </>
        ) : null}
        {counter === 5 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 5 && (
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
          {game.isHesitant ? (
            <>
              <CheckpointButton
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
              </CheckpointButton>
              <CheckpointButton
                style={{ float: "right", fontSize: ".9vw", paddingLeft: "7%" }}
                onClick={nextCheckpoint}
              >
                <div>{"const printUsers = (users) => {"}</div>
                <div>&#160;&#160;{"users?.map((user,index) => ("}</div>
                <div>&#160;&#160;&#160;&#160;{"console.log(user.name);"}</div>
                <div>{"))};"}</div>
              </CheckpointButton>
            </>
          ) : (
            <>
              <CheckpointButton
                style={{ float: "left", fontSize: ".9vw", paddingLeft: "7%" }}
                onClick={nextCheckpoint}
              >
                <div>{"public void printUsers(String[] users) {"}</div>
                <div>
                  &#160;&#160;{"for (int i = 0; i < users.length; i++) {"}
                </div>
                <div>
                  &#160;&#160;&#160;&#160;{"System.out.println(users[i]);"}
                </div>
                <div>{"}}"}</div>
              </CheckpointButton>
              <CheckpointButton
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
              </CheckpointButton>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkpoint10;
