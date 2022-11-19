import axios from "axios";
import { useEffect, useState } from "react";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint0 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
  }, [counter, setCounter]);

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
          top: "2em",
          marginLeft: "5%",
          fontSize: "3.5vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
        }}
      >
        Checkpoint: {game.checkpoint}
      </h1>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
        }}
      >
        <span>Welcome to Dystopia City... </span>
        {counter >= 1 && <span>You are in a self driving car... </span>}
        {counter >= 2 && <span>On your way to a job interview... </span>}
        {counter === 2 ? null : (
          <button onClick={() => setCounter(counter + 1)}>Next</button>
        )}
      </div>
      {counter === 2 && (
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            width: "30%",
            height: "5%",
            top: "30em",
            left: "35%",
            fontSize: "1vw",
            backgroundColor: "orange",
            border: "1px solid white",
            borderRadius: "15px",
            textAlign: "left",
            paddingLeft: "2em",
            color: "white",
          }}
          onClick={nextCheckpoint}
        >
          Next Checkpoint
        </button>
      )}
    </div>
  );
};

export default Checkpoint0;
