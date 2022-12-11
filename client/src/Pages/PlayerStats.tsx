import axios from "axios";
import {
  ChangeEvent,
  CSSProperties,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../Shared/Context";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { GreenSpan } from "../Styles/SharedStyles";
import { IPlayer } from "../Interfaces/IPlayer";

const PlayerStats = () => {
  const { url, player, setPlayer } = useContext(Context);
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const right: CSSProperties = { float: "right" };
  const Filter = require("bad-words");
  const filter = new Filter();
  const [newPlayerName, setNewPlayerName] = useState<string>(player.playername);
  const [ifUpdatePlayerName, setIfUpdatePlayerName] = useState(false);
  const [update, setUpdate] = useState<boolean>(false); //after updating a field, this variable changes which causes useEffect to fire
  const percentEndingsReached: number = +(
    (player.endingsReached / 3) *
    100
  ).toFixed(2);

  //set default state on load
  useEffect(() => {
    // if (!player) {
    //   axios
    //     .get(`${url}/playerstats/${location.state.id}`)
    //     .then((response) => setPlayer(response.data))
    //     .catch((error) => console.warn(error));
    // } else {
    axios
      .get(`${url}/playerstats/${player._id}`)
      .then((response) => setPlayer(response.data))
      .catch((error) => console.warn(error));
    // }
  }, [setUpdate, update, url]);

  // functions to update the pocode
  const handleNewPlayerNameTyped = (val: string) => {
    setNewPlayerName(val);
  };
  const openPlayerNameEdit = () => setIfUpdatePlayerName(true);
  const updatePlayerName = () => {
    let censoredName = filter.clean(newPlayerName);
    axios
      .put(`${url}/playerstats/updateplayername/${player._id}`, {
        playername: censoredName,
      })
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
    setIfUpdatePlayerName(false);
    setUpdate(!update);
  };

  return (
    <>
      <div
        style={{
          width: "50%",
          textAlign: "left",
          paddingTop: "5rem",
          margin: "0 auto",
        }}
      >
        <h1>Profile</h1>
        <div>
          <h3 style={{ verticalAlign: "middle" }}>
            Player Name: <GreenSpan>{player.playername}</GreenSpan>{" "}
            <button
              onClick={openPlayerNameEdit}
              style={{
                background: "orange",
                border: "none",
                borderRadius: "3px",
                color: "white",
                cursor: "pointer",
                padding: "3px 10px",
                fontFamily: "Trebuchet MS, sans-serif",
                verticalAlign: "middle",
              }}
            >
              Edit
            </button>
          </h3>
          {ifUpdatePlayerName ? (
            // <div style={{ background: "#aa69c4" }}>
            <div>
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "15px",
                  color: "white",
                }}
              >
                New Player Name:{" "}
                <input
                  type="text"
                  maxLength={20}
                  name="playername"
                  value={newPlayerName}
                  style={{
                    width: "50%",
                    height: "2em",
                    marginBottom: "1rem",
                  }}
                  onChange={(e) => handleNewPlayerNameTyped(e.target.value)}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  margin: "15px 0",
                }}
              >
                <button
                  onClick={() => setIfUpdatePlayerName(false)}
                  style={{
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "3px",
                    margin: "0 15px",
                    padding: "3px 10px",
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={updatePlayerName}
                  style={{
                    cursor: "pointer",
                    border: "1px solid lime",
                    borderRadius: "3px",
                    margin: "0 15px",
                    padding: "3px 10px",
                    fontFamily: "Trebuchet MS, sans-serif",
                    color: "white",
                    background: "green",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <hr />
        <div>
          Joined: <GreenSpan>{player.joinDateString}</GreenSpan>
        </div>
        <div>
          Games started: <GreenSpan>{player.gamesStarted}</GreenSpan>
        </div>
        <div>
          Games finished: <GreenSpan>{player.gamesFinished}</GreenSpan>
        </div>
        <div>
          Unique Endings reached:{" "}
          <GreenSpan>
            {player.endingsReached}/3 ({percentEndingsReached}%)
          </GreenSpan>
        </div>
        <br />
        <button style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </>
  );
};

export default PlayerStats;
