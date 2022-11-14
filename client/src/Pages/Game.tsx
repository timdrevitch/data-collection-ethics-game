import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import PauseMenu from "../Components/PauseMenu";
import ProgressUI from "../Components/ProgressUI";
import { Context } from "../Shared/Context";

const Game: FC = (): JSX.Element => {
  const { url, gameId, setGame, player, game } = useContext(Context);
  const [render, setRender] = useState<boolean>(false);

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
  }, [render]);

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
    });
  };

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
            top: "2em",
            marginLeft: "5%",
            fontSize: "3.5vw",
            textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
          }}
        >
          Game (Checkpoint: {game.checkpoint})
        </h1>
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
      </div>
    </>
  );
};

export default Game;
