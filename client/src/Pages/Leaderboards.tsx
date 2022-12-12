import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Shared/Context";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IPlayer } from "../Interfaces/IPlayer";
import { GraySpan, OrangeSpan } from "../Styles/SharedStyles";

const Leaderboards = () => {
  const { url, player, setPlayer } = useContext(Context);
  const location: Location = useLocation();
  const [playersFinished, setPlayersFinished] = useState<IPlayer[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const ordinal = require("ordinal");

  //set default state on load
  useEffect(() => {
    if (!player) {
      axios
        .get(`${url}/playerstats/${location.state.id}`)
        .then((response) => setPlayer(response.data))
        .catch((error) => console.warn(error));
    }
  }, []);
  useEffect(() => {
    axios
      .get(`${url}/players/gamesfinished`)
      .then((response) => setPlayersFinished(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <div
        style={{
          width: "90%",
          textAlign: "left",
          paddingTop: "5rem",
          margin: "0 auto",
        }}
      >
        <h2>Most Completed Playthroughs (Top 10)</h2>
        <table
          style={{ width: "100%", color: "#d1cfcf", border: "1px solid black" }}
        >
          <thead>
            <tr style={{ color: "white", backgroundColor: "#ffffff2d" }}>
              <td>Rank</td>
              <td>Player</td>
              <td>Completed Playthroughs</td>
            </tr>
          </thead>
          <tbody>
            {playersFinished?.map(
              (playerFinished: IPlayer, index: number) =>
                index < 10 &&
                (player._id === playerFinished._id ? (
                  <tr
                    key={playerFinished._id}
                    style={{ color: "white", backgroundColor: "#f4f5af6f" }}
                  >
                    <td>
                      {index === 0 ? (
                        <span style={{ color: "gold" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : (
                        <>{ordinal(index + 1)}</>
                      )}
                    </td>
                    <td>
                      {playerFinished.playername} ({playerFinished.firstname})
                    </td>
                    <td>{playerFinished.gamesFinished}</td>
                  </tr>
                ) : index % 2 === 0 ? (
                  <tr
                    key={playerFinished._id}
                    style={{ backgroundColor: "#ffffff11" }}
                  >
                    <td>
                      {index === 0 ? (
                        <span style={{ color: "gold" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : (
                        ordinal(index + 1)
                      )}
                    </td>
                    <td>
                      {playerFinished.playername}{" "}
                      <GraySpan>({playerFinished.firstname})</GraySpan>
                    </td>
                    <td>{playerFinished.gamesFinished}</td>
                  </tr>
                ) : (
                  <tr key={playerFinished._id}>
                    <td>
                      {index === 0 ? (
                        <span style={{ color: "gold" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : (
                        ordinal(index + 1)
                      )}
                    </td>
                    <td>
                      {playerFinished.playername}{" "}
                      <GraySpan>({playerFinished.firstname})</GraySpan>
                    </td>
                    <td>{playerFinished.gamesFinished}</td>
                  </tr>
                ))
            )}
            <tr style={{ color: "white", backgroundColor: "#ffffff2d" }}>
              <td>Your Rank (out of {playersFinished.length})</td>
              <td></td>
              <td></td>
            </tr>
            {playersFinished?.map(
              (playerFinished: IPlayer, index: number) =>
                player._id === playerFinished._id && (
                  <tr
                    key={playerFinished._id}
                    style={{ color: "white", backgroundColor: "#f4f5af6f" }}
                  >
                    <td>
                      {index === 0 ? (
                        <span style={{ color: "gold" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>{ordinal(index + 1)}</strong>
                        </span>
                      ) : (
                        ordinal(index + 1)
                      )}
                    </td>
                    <td>
                      {playerFinished.playername} ({playerFinished.firstname})
                    </td>
                    <td>{playerFinished.gamesFinished}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <br />
        <button style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </>
  );
};

export default Leaderboards;
