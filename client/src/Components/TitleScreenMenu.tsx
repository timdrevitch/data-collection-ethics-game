import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  MenuButtonContinue,
  MenuButtonContinueDisabled,
  MenuButtonLeaderboards,
  MenuButtonNewGame,
  MenuButtonNewGameDisabled,
  MenuButtonStats,
  PhoneImage,
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
      <PhoneImage src={require("../Assets/phoneBg.png")} alt="phone" />
      <WelcomePlayerContainer>
        <strong>Welcome, {player.playername} </strong>
        <PlayerImage src={player.image} alt="playerimage" />
      </WelcomePlayerContainer>
      <PlayerSinceContainer>
        Player since: <em>{player.joinDateString}</em>
      </PlayerSinceContainer>
      {player.gameInProgress ? (
        <MenuButtonContinue
          onClick={() =>
            navigate(`./game/${player.currentGame}`, {
              state: { id: player.currentGame },
            })
          }
        >
          Continue
        </MenuButtonContinue>
      ) : (
        <MenuButtonContinueDisabled disabled>
          Continue (no game in progress)
        </MenuButtonContinueDisabled>
      )}
      {player.gameInProgress ? (
        <MenuButtonNewGameDisabled disabled>New Game</MenuButtonNewGameDisabled>
      ) : (
        <MenuButtonNewGame onClick={startNewGame}>New Game</MenuButtonNewGame>
      )}
      <MenuButtonStats
        onClick={() =>
          navigate(`./playerstats/${player._id}`, {
            state: { id: player._id },
          })
        }
      >
        Profile
      </MenuButtonStats>
      <MenuButtonLeaderboards
        style={{ opacity: "100%" }}
        onClick={() =>
          navigate(`./leaderboards/${player._id}`, {
            state: { id: player._id },
          })
        }
      >
        Leaderboards
      </MenuButtonLeaderboards>
    </>
  );
};

export default TitleScreenMenu;
