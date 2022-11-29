import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import Checkpoint0 from "../Checkpoints/Checkpoint0";
import Checkpoint1 from "../Checkpoints/Checkpoint1";
import Checkpoint10 from "../Checkpoints/Checkpoint10";
import Checkpoint11 from "../Checkpoints/Checkpoint11";
import Checkpoint2 from "../Checkpoints/Checkpoint2";
import Checkpoint3 from "../Checkpoints/Checkpoint3";
import Checkpoint4 from "../Checkpoints/Checkpoint4";
import Checkpoint5 from "../Checkpoints/Checkpoint5";
import Checkpoint6 from "../Checkpoints/Checkpoint6";
import Checkpoint7 from "../Checkpoints/Checkpoint7";
import Checkpoint8 from "../Checkpoints/Checkpoint8";
import Checkpoint9 from "../Checkpoints/Checkpoint9";
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
      {game.checkpoint === 3 && (
        <Checkpoint3
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 4 && (
        <Checkpoint4
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 5 && (
        <Checkpoint5
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 6 && (
        <Checkpoint6
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 7 && (
        <Checkpoint7
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 8 && (
        <Checkpoint8
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 9 && (
        <Checkpoint9
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint === 10 && (
        <Checkpoint10
          url={url}
          game={game}
          render={render}
          setRender={setRender}
          player={player}
        />
      )}
      {game.checkpoint === 11 && (
        <Checkpoint11
          url={url}
          game={game}
          render={render}
          setRender={setRender}
        />
      )}
      {game.checkpoint > 11 && (
        <TheEnd url={url} playerId={player._id} game={game} />
      )}
    </>
  );
};

export default Game;
