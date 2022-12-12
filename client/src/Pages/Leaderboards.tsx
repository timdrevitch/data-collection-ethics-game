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
import { RiVipCrown2Fill } from "react-icons/ri";
import { GiImperialCrown, GiLaurelCrown, GiQueenCrown } from "react-icons/gi";

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
        <button
          style={{
            background: "skyblue",
            border: "none",
            borderRadius: "3px",
            color: "white",
            cursor: "pointer",
            padding: "5px 10px",
            fontFamily: "Trebuchet MS, sans-serif",
            verticalAlign: "2%",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <h2>
          Top 10 Most Completed Playthroughs (
          <em>
            Out of{" "}
            <span style={{ color: "gold" }}>{playersFinished.length}</span>{" "}
            Total Players
          </em>
          )
        </h2>
        <table
          style={{ width: "100%", color: "#d1cfcf", border: "1px solid black" }}
        >
          <thead>
            <tr>
              <td style={{ color: "gold" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Top Players</em>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ color: "white", backgroundColor: "#ffffff2d" }}>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank</td>
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
                          <strong>
                            <GiLaurelCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>
                            <GiQueenCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>
                            <RiVipCrown2Fill
                              style={{ verticalAlign: "-10%" }}
                            />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : (
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ordinal(index + 1)}</>
                      )}
                    </td>
                    <td>
                      {playerFinished.playername} ({playerFinished.firstname}){" "}
                      <button
                        onClick={() => navigate(`../playerstats/${player._id}`)}
                        style={{
                          background: "orange",
                          border: "none",
                          borderRadius: "3px",
                          color: "white",
                          cursor: "pointer",
                          padding: "0 10px",
                          fontFamily: "Trebuchet MS, sans-serif",
                          verticalAlign: "2%",
                        }}
                      >
                        Edit Name
                      </button>
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
                          <strong>
                            <GiLaurelCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>
                            <GiQueenCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>
                            <RiVipCrown2Fill
                              style={{ verticalAlign: "-10%" }}
                            />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : (
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ordinal(index + 1)}</>
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
                          <strong>
                            <GiLaurelCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>
                            <GiQueenCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>
                            <RiVipCrown2Fill
                              style={{ verticalAlign: "-10%" }}
                            />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : (
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ordinal(index + 1)}</>
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
            <tr>
              <td style={{ color: "gold" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Personal</em>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ color: "white", backgroundColor: "#ffffff2d" }}>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Rank</td>
              <td>Your Player Name</td>
              <td>Your Completed Playthroughs</td>
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
                          <strong>
                            <GiLaurelCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 1 ? (
                        <span style={{ color: "#999898" }}>
                          <strong>
                            <GiQueenCrown style={{ verticalAlign: "-10%" }} />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : index === 2 ? (
                        <span style={{ color: "#b44848" }}>
                          <strong>
                            <RiVipCrown2Fill
                              style={{ verticalAlign: "-10%" }}
                            />{" "}
                            {ordinal(index + 1)}
                          </strong>
                        </span>
                      ) : (
                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ordinal(index + 1)}</>
                      )}
                    </td>
                    <td>
                      {playerFinished.playername} ({playerFinished.firstname}){" "}
                      <button
                        onClick={() =>
                          navigate(`../playerstats/${playerFinished._id}`)
                        }
                        style={{
                          background: "orange",
                          border: "none",
                          borderRadius: "3px",
                          color: "white",
                          cursor: "pointer",
                          padding: "0 10px",
                          fontFamily: "Trebuchet MS, sans-serif",
                          verticalAlign: "2%",
                        }}
                      >
                        Edit Name
                      </button>
                    </td>
                    <td>{playerFinished.gamesFinished}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <br />
        <button
          style={{
            background: "skyblue",
            border: "none",
            borderRadius: "3px",
            color: "white",
            cursor: "pointer",
            padding: "5px 10px",
            fontFamily: "Trebuchet MS, sans-serif",
            verticalAlign: "2%",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Leaderboards;
