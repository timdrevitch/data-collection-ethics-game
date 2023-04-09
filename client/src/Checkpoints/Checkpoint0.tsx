import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint0 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 4) {
      console.log(event.key);
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = () => {
    // let data = { nervousChoice: nervousChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
    });
  };

  return (
    <>
      <img
        style={{
          // position: "fixed",
          // fontSize: "1vw",
          // height: "20vw",
          // zIndex: "101",
          // marginTop: "21.7em",
          // marginLeft: "53em",
          opacity: "80%",
          position: "absolute",
          zIndex: "101",
          width: "30%",
          top: "13.5em",
          marginLeft: "51.5%",
          fontSize: "1.5vw",
        }}
        src={require("../Assets/catGif3.gif")}
        alt="cat"
      />
      <div style={{ position: "relative" }}>
        <BackgroundImage
          style={{
            height: "55vw",
          }}
          src={require("../Assets/bedroom3.jpg")}
          alt="bedroomimage"
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
            width: "50%",
            top: "5.5em",
            marginLeft: "25%",
            fontSize: "2vw",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
            textAlign: "center",
            zIndex: "102",
            color: "greenyellow",
          }}
        >
          Press the "SPACE" or "RIGHT ARROW" key{" "}
          <img
            style={{
              height: "5vw",
              verticalAlign: "-50%",
            }}
            src={require("../Assets/keyboard.png")}
            alt="keyboard"
          />{" "}
          or click on the <OrangeSpan>NEXT</OrangeSpan> button to progress
        </div>
        <div
          style={{
            position: "absolute",
            width: "90%",
            top: "12em",
            marginLeft: "5%",
            fontSize: "2vw",
            zIndex: "102",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
          }}
        >
          {counter === 0 ? (
            <OrangeSpan>It is early morning in Dystocity... </OrangeSpan>
          ) : (
            <span>It is early morning in Dystocity... </span>
          )}
          {counter >= 1 ? (
            counter === 1 ? (
              // <OrangeSpan>Why have you not been able to sleep?... </OrangeSpan>
              <OrangeSpan>
                I am a recent graduate with a master's degree in computer
                science, and I find myself reminiscing about the exhilarating
                and unforgettable moments from our graduation party just a few
                days ago...{" "}
              </OrangeSpan>
            ) : (
              <span>
                I am a recent graduate with a master's degree in computer
                science, and I find myself reminiscing about the exhilarating
                and unforgettable moments from our graduation party just a few
                days ago...{" "}
              </span>
            )
          ) : null}
          {counter >= 2 ? (
            counter === 2 ? (
              // <OrangeSpan>
              //   Is it because of the two interviews you have today?...{" "}
              // </OrangeSpan>
              <OrangeSpan>
                My fellow students danced and sang, making it a night to
                remember...{" "}
              </OrangeSpan>
            ) : (
              <span>
                My fellow students danced and sang, making it a night to
                remember...{" "}
              </span>
            )
          ) : null}
          {counter >= 3 ? (
            counter === 3 ? (
              // <OrangeSpan>It's okay to be nervous... </OrangeSpan>
              <OrangeSpan>
                However, now, only days later, I must face reality and attend
                two interviews - Two companies in my hometown, Dystocity...{" "}
              </OrangeSpan>
            ) : (
              <span>
                However, now, only days later, I must face reality and attend
                two interviews - Two companies in my hometown, Dystocity...{" "}
              </span>
            )
          ) : null}
          {counter >= 4 ? (
            counter === 4 ? (
              // <OrangeSpan>It's okay to be nervous... </OrangeSpan>
              <OrangeSpan>
                I hope my interviews go smoothly today...{" "}
              </OrangeSpan>
            ) : (
              <span>I hope my interviews go smoothly today... </span>
            )
          ) : null}
          {counter === 4 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 4 && (
          // <div
          //   style={{
          //     position: "absolute",
          //     left: "0",
          //     right: "0",
          //     marginLeft: "auto",
          //     marginRight: "auto",
          //     width: "50%",
          //     height: "14.7%",
          //     top: "38em",
          //     margin: "0 auto",
          //     fontSize: "1vw",
          //     color: "white",
          //     zIndex: "102",
          //   }}
          // >
          //   <CheckpointButton
          //     style={{ float: "left" }}
          //     onClick={() => nextCheckpoint(false)}
          //   >
          //     I am not nervous for the interviews. I just woke up early to
          //     prepare extra.
          //   </CheckpointButton>
          //   <CheckpointButton
          //     style={{ float: "right" }}
          //     onClick={() => nextCheckpoint(true)}
          //   >
          //     I've definitely been a little nervous. I want to do well and get
          //     at least one of these jobs.
          //   </CheckpointButton>
          // </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              marginLeft: "0",
              marginRight: "auto",
              width: "50%",
              height: "14.7%",
              top: "38em",
              margin: "0 auto",
              fontSize: "1vw",
              color: "white",
              zIndex: "102",
            }}
          >
            <CheckpointButton
              style={{ float: "right" }}
              onClick={nextCheckpoint}
            >
              You have a new message. See who messaged you.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint0;
