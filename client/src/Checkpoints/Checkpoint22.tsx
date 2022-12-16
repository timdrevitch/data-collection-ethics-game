import axios from "axios";
import { useEffect, useState } from "react";
import {
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

const Checkpoint22 = ({ url, game, render, setRender }) => {
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

  const nextCheckpoint = (likeAppChoice: boolean) => {
    let data = { likeAppChoice: likeAppChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
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
              Just finished the second interview! I'm want to make sure I got
              the interviewer's question right... The question was: What REST
              operation should be used when updating data?
            </em>
            "{" "}
          </OrangeSpan>
        ) : (
          <span>
            <LimeGreenSpan>You</LimeGreenSpan> "
            <em>
              Just finished the second interview! I'm want to make sure I got
              the interviewer's question right... The question was: What REST
              operation should be used when updating data?
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
                <em>Nice!!! And I would have said a "PUT" request probably.</em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>Nice!!! And I would have said a "PUT" request probably.</em>
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
                  {game.apiQuestionCorrect ? (
                    <span>Oh sweet! That's what I answered with!</span>
                  ) : (
                    <span>
                      Noooo, I gave a different answer... maybe it won't matter
                      if I got one question wrong on the spot.
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.apiQuestionCorrect ? (
                    <span>Oh sweet! That's what I answered with!</span>
                  ) : (
                    <span>
                      Noooo, I gave a different answer... maybe it won't matter
                      if I got one question wrong on the spot.
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
                  {game.apiQuestionCorrect ? (
                    <span>
                      Nice! On your way home now? I saw you commented on my
                      post!
                    </span>
                  ) : (
                    <span>
                      I'm sure it won't even matter. There's a good chance I'm
                      wrong too so don't worry! You on your way hhome finally?
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  {game.apiQuestionCorrect ? (
                    <span>
                      Nice! On your way home now? I saw you commented on my
                      post!
                    </span>
                  ) : (
                    <span>
                      I'm sure it won't even matter. There's a good chance I'm
                      wrong too so don't worry! You on your way hhome finally?
                    </span>
                  )}
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 4 ? (
          <>
            <br />
            {counter === 4 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  On my way home! It's been a long day. I'm already tired!
                  Should have slept more last night! And yeah, I was using the
                  Dystogram app for a bit today!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  On my way home! It's been a long day. I'm already tired!
                  Should have slept more last night! And yeah, I was using the
                  Dystogram app for a bit today!
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 5 ? (
          <>
            <br />
            {counter === 5 ? (
              <OrangeSpan>Do you like the Dystogram app so far?... </OrangeSpan>
            ) : (
              <span>Do you like the Dystogram app so far?... </span>
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
            width: "25%",
            height: "10%",
            top: "40em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              float: "left",
              width: "45%",
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
            Tell Allen that you don't like the app.
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "right",
              width: "45%",
              height: "100%",
              fontSize: "1vw",
              backgroundColor: "orange",
              border: "1px solid white",
              borderRadius: "15px",
              textAlign: "left",
              padding: "0 1.5em",
              color: "white",
            }}
            onClick={() => nextCheckpoint(true)}
          >
            Tell Allen that you like the app.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint22;
