import { FC, useState } from "react";
import { Context } from "./Shared/Context";
import "./App.css";
import Login from "./Pages/Login";
import { IPlayer } from "./Interfaces/IPlayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerStats from "./Pages/PlayerStats";
import Game from "./Pages/Game";
import Leaderboards from "./Pages/Leaderboards";
import { ImVolumeHigh, ImVolumeMute2 } from "react-icons/im";

const App: FC = (): JSX.Element => {
  const [url, setUrl] = useState<string>("http://localhost:4000/api/v1");
  // https://data-ethics-game.herokuapp.com/api/v1 || http://localhost:4000/api/v1
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userFirstName, setUserFirstName] = useState<string | null>(null);
  const [userLastName, setUserLastName] = useState<string | null>(null);
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [player, setPlayer] = useState<IPlayer>({});
  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<any>({});
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [audioId, setAudioId] = useState(
    document.getElementById("myAudio") as HTMLAudioElement | null
  );

  const toggleAudio = () => {
    if (audioId === null) {
      setAudioId(document.getElementById("myAudio") as HTMLAudioElement | null);
    }
    audioId.play();
    setIsMuted(!isMuted);
  };

  return (
    <Router>
      <Context.Provider
        value={{
          url,
          setUrl,
          userEmail,
          setUserEmail,
          userFullName,
          setUserFullName,
          userImage,
          setUserImage,
          userLastName,
          setUserLastName,
          userFirstName,
          setUserFirstName,
          userExists,
          setUserExists,
          player,
          setPlayer,
          gameId,
          setGameId,
          game,
          setGame,
          isMuted,
          setIsMuted,
        }}
      >
        <button
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "101",
            border: "2px solid #0f1113",
            cursor: "pointer",
            backgroundColor: "#1a1d22",
            padding: "1.25em",
            color: "white",
          }}
          onClick={toggleAudio}
        >
          {isMuted ? <ImVolumeMute2 size="50" /> : <ImVolumeHigh size="50" />}
        </button>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/playerstats/:id" element={<PlayerStats />} />
          <Route path="/leaderboards/:id" element={<Leaderboards />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
        <audio
          autoPlay={true}
          controls={false}
          loop={true}
          muted={isMuted}
          id="myAudio"
        >
          <source
            src={require("./Assets/Assets-Fangtai/Audio/BGM/HomeSceneCut.wav")}
            type="audio/wav"
          />
        </audio>
      </Context.Provider>
    </Router>
  );
};

export default App;
