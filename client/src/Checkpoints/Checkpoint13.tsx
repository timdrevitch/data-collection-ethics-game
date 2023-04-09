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

const Checkpoint13 = ({ url, game, render, setRender, player }) => {
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
                  {game.postedAboutArt ? (
                    <span>
                      It was so strange. At the end of the interview, the
                      interviewer out of the blue asked me if I would also like
                      to apply for an illustrator position. That skill isn't
                      mentioned anywhere in my interview materials.
                    </span>
                  ) : (
                    <span>
                      The interviewer liked me a lot! I am really hoping I get
                      this one! I still have my other interview to go to now
                      though. I'm on my way there now!
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
                      It was so strange. At the end of the interview, the
                      interviewer out of the blue asked me if I would also like
                      to apply for an illustrator position. That skill isn't
                      mentioned anywhere in my interview materials.
                    </span>
                  ) : (
                    <span>
                      The interviewer liked me a lot! I am really hoping I get
                      this one! I still have my other interview to go to now
                      though. I'm on my way there now!
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
                <em>
                  {game.postedAboutArt ? (
                    <span>
                      No biggie, <strong>{player.playername}</strong>! It's
                      possible they just needed peeps for that role. You could
                      probably get a job doing art or programming. That's how
                      good you are at both of those things!
                    </span>
                  ) : (
                    <span>
                      That's awesome <strong>{player.playername}</strong>! I bet
                      you end up getting it.
                    </span>
                  )}
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  {game.postedAboutArt ? (
                    <span>
                      No biggie, <strong>{player.playername}</strong>! It's
                      possible they just needed peeps for that role. You could
                      probably get a job doing art or programming. That's how
                      good you are at both of those things!
                    </span>
                  ) : (
                    <span>
                      That's awesome <strong>{player.playername}</strong>! I bet
                      you end up getting it.
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
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  <span>Hopefully I get the programming job!</span>
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  <span>Hopefully I get the programming job!</span>
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
                  Dude, I've been glued to Dystogram lately. There's a crazy
                  amount of rad stuff on here, and I don't wanna miss out on
                  living it up, y'know? You should seriously hop on it more,
                  it's a blast!
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Dude, I've been glued to Dystogram lately. There's a crazy
                  amount of rad stuff on here, and I don't wanna miss out on
                  living it up, y'know? You should seriously hop on it more,
                  it's a blast!
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
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  <span>
                    I actually could now that I got myself a self-driving car.
                    I'll check it out again right now while I'm on the way to
                    the other interview!
                  </span>
                </em>
                "{" "}
              </OrangeSpan>
            ) : (
              <span>
                <LimeGreenSpan>You:</LimeGreenSpan> "
                <em>
                  <span>
                    I actually could now that I got myself a self-driving car.
                    I'll check it out again right now while I'm on the way to
                    the other interview!
                  </span>
                </em>
                "{" "}
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
            marginLeft: "0",
            marginRight: "auto",
            width: "50%",
            height: "14%",
            top: "40em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          <CheckpointButton style={{ float: "right" }} onClick={nextCheckpoint}>
            Open Dystogram.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint13;
