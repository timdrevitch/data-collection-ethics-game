import { FC, useState } from "react";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [url, setUrl] = useState<string>(
    "https://data-ethics-game.herokuapp.com/api/v1"
  ); // https://data-ethics-game.herokuapp.com/api/v1 || http://localhost:4000/api/v1

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ width: "100%", opacity: "30%" }}
        src={require("./Assets/car.jpeg")}
        alt="carimage"
      />
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: "1em",
          marginLeft: "5%",
          fontSize: "3.5vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
        }}
      >
        Data Collection Ethics Game
      </h1>
      <div
        style={{
          position: "absolute",
          width: "40%",
          top: "7.5em",
          marginLeft: "5%",
          fontSize: "1.5vw",
          color: "orange",
        }}
      >
        Tim Drevitch & Fangtai Bao
      </div>
      <button
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "30%",
          height: "5%",
          top: "30em",
          right: "-5%",
          fontSize: "1vw",
          backgroundColor: "orange",
          border: "1px solid white",
          borderRadius: "15px",
          textAlign: "left",
          paddingLeft: "2em",
          color: "white",
        }}
      >
        Continue
      </button>
      <button
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "30%",
          height: "5%",
          top: "35em",
          right: "-5%",
          fontSize: "1vw",
          backgroundColor: "orange",
          border: "1px solid white",
          borderRadius: "15px",
          textAlign: "left",
          paddingLeft: "2em",
          color: "white",
        }}
      >
        New Game
      </button>
      <button
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "30%",
          height: "5%",
          top: "40em",
          right: "-5%",
          fontSize: "1vw",
          backgroundColor: "orange",
          border: "1px solid white",
          borderRadius: "15px",
          textAlign: "left",
          paddingLeft: "2em",
          color: "white",
        }}
      >
        Settings
      </button>
    </div>
  );
};

export default App;
