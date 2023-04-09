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
  CityGif,
  DarkFooter,
  DarkFooter2,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint21 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 3) {
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
        alt="interviewbackground"
      />
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
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
        {game.viewedCompanyBeef ? (
          counter === 0 ? (
            <OrangeSpan>
              I bet that interviewer wanted to know if I had interviewed at the
              other company that this company is at odds with that I saw on
              Dystogram earlier...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I bet that interviewer wanted to know if I had interviewed at the
              other company that this company is at odds with that I saw on
              Dystogram earlier...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            I wonder why that interviewer wnated to know if I was interviewing
            at other companies today...{" "}
          </OrangeSpan>
        ) : (
          <span>
            I wonder why that interviewer wnated to know if I was interviewing
            at other companies today...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            {counter === 1 ? (
              <>
                <br />
                <OrangeSpan>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Thank you for your preference, you should hear back from us
                    shortly about whether you got the job!
                  </em>
                  "{" "}
                </OrangeSpan>
              </>
            ) : (
              <>
                <br />
                <span>
                  <YellowSpan>Interviewer:</YellowSpan> "
                  <em>
                    Thank you for your preference, you should hear back from us
                    shortly about whether you got the job!
                  </em>
                  "{" "}
                </span>
              </>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              I've finished both interviews now, it feels good to be done...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I've finished both interviews now, it feels good to be done...{" "}
            </span>
          )
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>
              I should message Allen when I get in the car and let him know how
              this one went!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I should message Allen when I get in the car and let him know how
              this one went!...{" "}
            </span>
          )
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
            marginLeft: "0",
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
          <CheckpointButton style={{ float: "right" }} onClick={nextCheckpoint}>
            Message Allen.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint21;
