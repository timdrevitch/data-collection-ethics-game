import { FC, useState } from "react";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [url, setUrl] = useState<string>(
    "https://data-ethics-game.herokuapp.com/api/v1"
  ); // https://data-ethics-game.herokuapp.com/api/v1 || http://localhost:4000/api/v1

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ width: "100%" }}
        src={require("./Assets/car.jpeg")}
        alt="carimage"
      />
      <h1
        style={{
          position: "absolute",
          width: "40%",
          top: "2em",
          marginLeft: "5%",
          fontSize: "2.5vw",
        }}
      >
        Data Collection Ethics Game
      </h1>
      <div
        style={{
          position: "absolute",
          width: "40%",
          top: "7em",
          marginLeft: "5%",
          fontSize: "1.5vw",
          color: "orange",
        }}
      >
        Tim Drevitch & Fangtai Bao
      </div>
      <button
        style={{
          position: "absolute",
          width: "10%",
          bottom: "20em",
          right: "5%",
          // marginRight: "5%",
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default App;
