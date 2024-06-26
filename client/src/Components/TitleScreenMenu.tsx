import axios from "axios";
import { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Context } from "../Shared/Context";
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
  const {
    setUserEmail,
    setUserFullName,
    setUserImage,
    setUserLastName,
    setUserFirstName,
  } = useContext(Context);

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

  const signOut = () => {
    setUserEmail(null);
    setUserFullName(null);
    setUserImage(null);
    setUserLastName(null);
    setUserFirstName(null);
  };

  return (
    <>
      <PhoneImage src={require("../Assets/hand.png")} alt="phone" />
      <WelcomePlayerContainer>
        <strong>Welcome, {player.playername} </strong>
        <br />
        <button
          style={{ cursor: "pointer", fontSize: "1vw" }}
          onClick={signOut}
        >
          Sign out
        </button>
        {/* <PlayerImage src={player.image} alt="playerimage" /> */}
      </WelcomePlayerContainer>
      <PlayerSinceContainer style={{ width: "24.5%" }}>
        Joined: <em>{player.joinDateString}</em>
      </PlayerSinceContainer>
      {player.gameInProgress ? (
        <MenuButtonContinue
          onClick={() => {
            navigate(`./game/${player.currentGame}`, {
              state: { id: player.currentGame },
            });
          }}
        >
          Continue
        </MenuButtonContinue>
      ) : (
        <MenuButtonContinueDisabled disabled>
          Continue
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
      <div
        style={{
          opacity: "100%",
          background: "none",
          //border: "1px solid red",
          border: "none",
          marginTop: "4em",
          left: "36.5em",
          color: "black",
          width: "15%",
          cursor: "default",
          backgroundColor: "transparent",
          borderRadius: "55px",
          textAlign: "center",
          position: "absolute",
          height: "5.1%",
          right: "52%",
          top: "33.5em",
          fontSize: "1vw",
        }}
      >
        <em>
          Make decisions carefully on your job hunt in the futuristic city of
          Dystocity.
        </em>
      </div>
    </>
  );
};

export default TitleScreenMenu;
