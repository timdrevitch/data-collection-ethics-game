import axios from "axios";
import { FC, useContext, useEffect } from "react";
import PauseMenu from "../Components/PauseMenu";
import ProgressUI from "../Components/ProgressUI";
import { Context } from "../Shared/Context";

const Game: FC = (): JSX.Element => {
  const { url, gameId, setGame, player } = useContext(Context);

  useEffect(() => {
    let effectMounted: boolean = true;
    if (effectMounted) {
      if (gameId === undefined || gameId === null || gameId === "") {
        console.log("I am getting called");
        axios
          .get(`${url}/getgame/${player.currentGame}`)
          .then((response) => {
            console.log(response.data);
            setGame(response.data);
          })
          .catch((error) => console.warn(error));
      } else {
        console.log("No I am getting called");
        axios
          .get(`${url}/getgame/${gameId}`)
          .then((response) => {
            console.log(response.data);
            setGame(response.data);
          })
          .catch((error) => console.warn(error));
      }
    }
    return () => {
      effectMounted = false;
    };
  }, []);

  return (
    <>
      <ProgressUI />
      <PauseMenu />
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", opacity: "30%" }}
          src={require("../Assets/car.jpeg")}
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
          Beginning of game
        </h1>
      </div>
    </>
  );
};

export default Game;
