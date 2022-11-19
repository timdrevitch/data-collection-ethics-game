import axios from "axios";
import { useEffect, useState } from "react";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
  PhoneImage,
} from "../Styles/TitleScreenStyles";

const Checkpoint2 = ({ url, game, render, setRender }) => {
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
        <span>You have a message from your friend... </span>
        {counter >= 1 && <span>Open the message... </span>}
        {counter === 1 ? null : (
          <button onClick={() => setCounter(counter + 1)}>Next</button>
        )}
      </div>
      {counter === 1 && (
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
          Open message
        </button>
      )}
    </div>
  );
};

export default Checkpoint2;
