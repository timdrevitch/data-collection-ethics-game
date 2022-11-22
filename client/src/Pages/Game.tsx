import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import Checkpoint0 from "../Checkpoints/Checkpoint0";
import Checkpoint1 from "../Checkpoints/Checkpoint1";
import Checkpoint2 from "../Checkpoints/Checkpoint2";
import TheEnd from "../Checkpoints/TheEnd";
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
  }, [render, setRender]);

  return (
    <>
      <ProgressUI />
      <PauseMenu />
      {game.checkpoint === 0 && (
        <Checkpoint0
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 1 && (
        <Checkpoint1
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 2 && (
        <Checkpoint2
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint > 2 && <TheEnd url={url} playerId={player._id} />}
    </>
  );
};

export default Game;
