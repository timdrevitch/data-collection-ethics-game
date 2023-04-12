import axios from "axios";
import { useEffect, useState } from "react";
import {
  CheckpointButton,
  GreenSpan,
  LimeGreenSpan,
  NextButton,
  OrangeSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint22 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter + " useEffect");
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 3) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = (postAboutInterviewsChoice: boolean) => {
    let data = { postAboutInterviewsChoice: postAboutInterviewsChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
      setRender(!render);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage src={require("../Assets/innerCar.png")} alt="carimage" />
      <CityGif src={require("../Assets/drive3.gif")} alt="city" />
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
          top: "6em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            <LimeGreenSpan>You</LimeGreenSpan> "
            <em>
              Just finished the second interview! I think it went well... it's
              strange though, I feel like the interviewer knew more about me
              than what I gave them on my resume and in my portfolio.
            </em>
            "{" "}
          </OrangeSpan>
        ) : (
          <span>
            <LimeGreenSpan>You</LimeGreenSpan> "
            <em>
              Just finished the second interview! I think it went well... it's
              strange though, I feel like the interviewer knew more about me
              than what I gave them on my resume and in my portfolio.
            </em>
            "{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Nice!!! And I don't know what you're talking about but I'm
                  sure you're just overthinking it{" "}
                  <strong>{player.playername}</strong>!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Nice!!! And I don't know what you're talking about but I'm
                  sure you're just overthinking it{" "}
                  <strong>{player.playername}</strong>!
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            <br />
            {counter === 2 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.postedAboutArt ? (
                    <span>
                      I probably am just overthinking it. But even in my first
                      interview I felt like there was no reason the interviewer
                      should have known I was good at art. And then in this one,
                      the interviewer was asking if I used the Dystogram app...
                    </span>
                  ) : (
                    <span>
                      I probably am just overthinking it. But the interviewer
                      was asking if I used the Dystogram app and if I had viewed
                      Nick's profile for some reason...
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.postedAboutArt ? (
                    <span>
                      I probably am just overthinking it. But even in my first
                      interview I felt like there was no reason the interviewer
                      should have known I was good at art. And then in this one,
                      the interviewer was asking if I used the Dystogram app...
                    </span>
                  ) : (
                    <span>
                      I probably am just overthinking it. But the interviewer
                      was asking if I used the Dystogram app and if I had viewed
                      Nick's profile for some reason...
                    </span>
                  )}
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          <>
            <br />
            {counter === 3 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  <span>
                    That is weird... you on your way home now? Make a post about
                    how the interviews went! Our friends would love to hear
                    about it!
                  </span>
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  <span>
                    That is weird... you on your way home now? Make a post about
                    how the interviews went! Our friends would love to hear
                    about it!
                  </span>
                </em>
                "{" "}
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
            width: "50%",
            height: "14%",
            top: "38em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          <CheckpointButton
            style={{ float: "left" }}
            onClick={() => nextCheckpoint(false)}
          >
            Tell Allen that you are too tired, maybe tomorrow though.
          </CheckpointButton>
          <CheckpointButton
            style={{ float: "right" }}
            onClick={() => nextCheckpoint(true)}
          >
            Make a post about the day you've had so your friends can see it.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint22;
