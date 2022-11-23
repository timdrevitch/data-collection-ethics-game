import axios from "axios";
import { useEffect, useState } from "react";
import { OrangeSpan } from "../Styles/SharedStyles";
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

  const nextCheckpoint = (nervousChoice: boolean) => {
    let data = { nervousChoice: nervousChoice };
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
        src={require("../Assets/Bedroom.png")}
        alt="bedroomimage"
      />
      {/* <CityGif src={require("../Assets/city.gif")} alt="city" /> */}
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: ".01em",
          textAlign: "center",
          fontSize: "3.5vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
        }}
      >
        Checkpoint: {game.checkpoint}
      </h1>
      <div
        style={{
          position: "absolute",
          width: "90%",
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>It is early morning in Dystocity... </OrangeSpan>
        ) : (
          <span>It is early morning in Dystocity... </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>Why have you not been able to sleep?... </OrangeSpan>
          ) : (
            <span>Why have you not been able to sleep?... </span>
          )
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              Is it because of the two interviews you have today?...{" "}
            </OrangeSpan>
          ) : (
            <span>Is it because of the two interviews you have today?... </span>
          )
        ) : null}
        {counter >= 3 ? (
          counter === 3 ? (
            <OrangeSpan>It's okay to be nervous... </OrangeSpan>
          ) : (
            <span>It's okay to be nervous... </span>
          )
        ) : null}
        {counter === 3 ? null : (
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={() => setCounter(counter + 1)}
          >
            Next
          </button>
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
            height: "10%",
            top: "35em",
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
            I am not nervous for the interviews. I just woke up early to prepare
            extra.
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
            I've definitely been a little nervous. I want to do well and get at
            least one of these jobs.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint0;
