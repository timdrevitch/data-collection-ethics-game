import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Shared/Context";
import { GreenSpan } from "../Styles/SharedStyles";
import { FaPauseCircle } from "react-icons/fa";

const PauseMenu = () => {
  const { game } = useContext(Context);
  const navigate = useNavigate();
  const TOTAL_CHECKPOINTS: number = 15;
  return (
    <details
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "100",
      }}
    >
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          border: "2px solid #0f1113",
        }}
      >
        <div
          style={{
            border: "1px sold white",
            backgroundColor: "#1a1d22",
            padding: "1em",
            textAlign: "right",
          }}
        >
          <FaPauseCircle size="50" />
        </div>
      </summary>
      <div
        style={{
          width: "96vw",
          backgroundColor: "black",
          opacity: "80%",
          textAlign: "center",
          height: "100vh",
          marginTop: "-0.001em",
          padding: "2em",
        }}
      >
        <div style={{ float: "left" }}>
          <h3 style={{ textAlign: "left" }}>
            Game ID: <GreenSpan>{game._id}</GreenSpan>
          </h3>
          <h3 style={{ textAlign: "left" }}>
            Game Started: <GreenSpan>{game.startedDate}</GreenSpan>
          </h3>
          <h3 style={{ textAlign: "left" }}>
            Player: <GreenSpan>{game.player}</GreenSpan>
          </h3>
        </div>
        <div style={{ float: "right" }}>
          <h3 style={{ textAlign: "right" }}>
            Checkpoint:{" "}
            <GreenSpan>
              {game.checkpoint}/{TOTAL_CHECKPOINTS}
            </GreenSpan>
          </h3>
          <h3 style={{ textAlign: "right" }}>
            Progress:{" "}
            <GreenSpan>
              {((game.checkpoint / TOTAL_CHECKPOINTS) * 100).toFixed(2)}%
            </GreenSpan>
          </h3>
          <button style={{ float: "right" }} onClick={() => navigate("/")}>
            Quit (all progress will be saved)
          </button>
        </div>
      </div>
    </details>
  );
};

export default PauseMenu;
