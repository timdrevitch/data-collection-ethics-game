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

const Checkpoint13 = ({ url, game, render, setRender }) => {
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

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
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
            <YellowSpan>Allen:</YellowSpan> "
            <em>
              How did the first interview go? What did the interviewer think of
              you?
            </em>
            "{" "}
          </OrangeSpan>
        ) : (
          <span>
            <YellowSpan>Allen:</YellowSpan> "
            <em>
              How did the first interview go? What did the interviewer think of
              you?
            </em>
            "{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {counter === 1 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.readTerms ? (
                    <span>The interviewer liked that I have a CS degree!</span>
                  ) : (
                    <span>
                      The interviewer somehow knew that I just graduated even
                      though I didn't tell him my age or when I graduated. This
                      probably hurt my chances.
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.readTerms ? (
                    <span>The interviewer liked that I have a CS degree!</span>
                  ) : (
                    <span>
                      The interviewer somehow knew that I just graduated even
                      though I didn't tell him my age or when I graduated. This
                      probably hurt my chances.
                    </span>
                  )}
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
                <YellowSpan>Allen:</YellowSpan> "
                <em>Did the interviewer have you do any problems?</em>"{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>Did the interviewer have you do any problems?</em>"{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 3 ? (
          <>
            <br />
            {counter === 3 ? (
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.isHesitant ? (
                    <span>
                      I was given a JavaScript question about mapping an array
                      of objects! I did a problem like this this morning. It was
                      easy!
                    </span>
                  ) : (
                    <span>
                      I was given a JavaScript question about mapping an array
                      of objects. I solved it, but I had to use Java and Strings
                      instead of objects because I forgot the exact way to do it
                      in JavaScript unfortunately.
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  {game.isHesitant ? (
                    <span>
                      I was given a JavaScript question about mapping an array
                      of objects! I did a problem like this this morning. It was
                      easy!
                    </span>
                  ) : (
                    <span>
                      I was given a JavaScript question about mapping an array
                      of objects. I solved it, but I had to use Java and Strings
                      instead of objects because I forgot the exact way to do it
                      in JavaScript unfortunately.
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
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  At least it's over! Hopefully you get it. On your way to the
                  other interview now?
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  At least it's over. Hopefully you get it. On your way to the
                  other interview now?
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
              <OrangeSpan>
                <LimeGreenSpan>You:</LimeGreenSpan> "<em>Yeah!</em>"{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "<em>Yeah!</em>"{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 6 ? (
          <>
            <br />
            {counter === 6 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Oh sweet! Add me on Dystogram while you are on your way!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Oh sweet! Add me on Dystogram while you are on your way!
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 7 ? (
          <>
            <br />
            {counter === 7 ? (
              <OrangeSpan>
                It's nice having a self-driving car! Add Allen as a friend while
                you are heading to the next interview...{" "}
              </OrangeSpan>
            ) : (
              <span>
                It's nice having a self-driving car! Add Allen as a friend while
                you are heading to the next interview...{" "}
              </span>
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
            Open Dystogram.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint13;
