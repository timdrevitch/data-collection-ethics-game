import { FC, useEffect, useState } from "react";
import { Context } from "./Shared/Context";
import "./App.css";
import Login from "./Pages/Login";
import { IPlayer } from "./Interfaces/IPlayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerStats from "./Pages/PlayerStats";
import Game from "./Pages/Game";
import Leaderboards from "./Pages/Leaderboards";
import { ImVolumeHigh, ImVolumeMute2 } from "react-icons/im";
import { IGame } from "./Interfaces/IGame";
const homeAudio = require("./Assets/Assets-Fangtai/Audio/BGM/HomeSceneCut.wav");
const carAudio = require("./Assets/Assets-Fangtai/Audio/BGM/CarScene.wav");

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
  const [game, setGame] = useState<IGame>({});
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [audioId, setAudioId] = useState(
    document.getElementById("myAudio") as HTMLAudioElement | null
  );
  const [backgroundMusic, setBackgroundMusic] = useState<string>("home");
  const [audio, setAudio] = useState<string>(homeAudio);

  const toggleAudio = () => {
    if (audioId === null) {
      setAudioId(document.getElementById("myAudio") as HTMLAudioElement | null);
    }
    audioId.play();
    setIsMuted(!isMuted);
  };

  // useEffect(() => {
  //   if (backgroundMusic === "home") {
  //     setAudio(homeAudio);
  //   }
  //   if (backgroundMusic === "car") {
  //     setAudio(carAudio);
  //   }
  // }, [setBackgroundMusic, backgroundMusic]);

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
          backgroundMusic,
          setBackgroundMusic,
        }}
      >
        <button
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "104",
            border: "2px solid #0f1113",
            cursor: "pointer",
            backgroundColor: "#1a1d22",
            width: "3em",
            color: "white",
            fontSize: "3.28vw",
            borderBottomRightRadius: "10px",
          }}
          onClick={toggleAudio}
        >
          {isMuted ? <ImVolumeMute2 /> : <ImVolumeHigh />}
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
          <source src={audio} type="audio/wav" />
        </audio>
      </Context.Provider>
    </Router>
  );
};

export default App;
