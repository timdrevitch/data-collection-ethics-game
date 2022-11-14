import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  MenuButton,
  MenuButtonDisabled,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const TitleScreenMenu = ({ player, url, setGameId }) => {
  const navigate: NavigateFunction = useNavigate();

  const startNewGame = () => {
    //create new game
    axios.post(`${url}/newgame/create/${player._id}`).then((res) => {
      setGameId(res.data._id);
      console.log("game " + res.data._id + " created, now navigation to game");
      //update user
      const data = { game: res.data._id };
      axios.put(`${url}/newgame/${player._id}`, data).then(() => {
        console.log("user updated, now creating game");
        navigate(`./game/${res.data._id}`, {
          state: { id: player._id },
        });
      });
    });
  };

  return (
    <>
      <WelcomePlayerContainer>
        Welcome, {player.playername}{" "}
        <PlayerImage src={player.image} alt="playerimage" />
      </WelcomePlayerContainer>
      <PlayerSinceContainer>
        <em>Player since: {player.joinDateString}</em>
      </PlayerSinceContainer>
      {player.gameInProgress ? (
        <MenuButton
          style={{ top: "30em" }}
          onClick={() =>
            navigate(`./game/${player.currentGame}`, {
              state: { id: player.currentGame },
            })
          }
        >
          Continue
        </MenuButton>
      ) : (
        <MenuButtonDisabled style={{ top: "30em" }} disabled>
          Continue (no game in progress)
        </MenuButtonDisabled>
      )}
      {player.gameInProgress ? (
        <MenuButtonDisabled style={{ top: "35em" }} disabled>
          New Game
        </MenuButtonDisabled>
      ) : (
        <MenuButton style={{ top: "35em" }} onClick={startNewGame}>
          New Game
        </MenuButton>
      )}
      <MenuButton
        style={{ top: "40em" }}
        onClick={() =>
          navigate(`./playerstats/${player._id}`, {
            state: { id: player._id },
          })
        }
      >
        Stats
      </MenuButton>
    </>
  );
};

export default TitleScreenMenu;
