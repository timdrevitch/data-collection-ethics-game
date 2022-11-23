import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Shared/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { GreenSpan } from "../Styles/SharedStyles";

const PlayerStats = () => {
  const { url, player, setPlayer } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  //set default state on load
  useEffect(() => {
    if (!player) {
      axios
        .get(`${url}/playerstats/${location.state.id}`)
        .then((response) => setPlayer(response.data))
        .catch((error) => console.warn(error));
    }
  }, []);

  return (
    <>
      <div style={{ width: "100%", textAlign: "center", padding: "5rem" }}>
        <h2>
          <GreenSpan>
            {player.fullname} ({player.playername})
          </GreenSpan>
        </h2>
        <div>
          Player since: <GreenSpan>{player.joinDateString}</GreenSpan>
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
            {player.endingsReached}/3 (
            {((player.endingsReached / 3) * 100).toFixed(2)}%)
          </GreenSpan>
        </div>
        <br />
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </>
  );
};

export default PlayerStats;
