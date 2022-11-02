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
          width: "100%",
          textAlign: "center",
          top: "5rem",
        }}
      >
        Data Collection Ethics Game
      </h1>
    </div>
  );
};

export default App;
