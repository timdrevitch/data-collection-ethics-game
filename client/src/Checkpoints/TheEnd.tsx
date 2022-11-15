import axios from "axios";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";

const TheEnd = ({ url, playerId }) => {
  const navigate: NavigateFunction = useNavigate();

  const endGame = () => {
    axios.put(`${url}/endgame/${playerId}`).then(() => navigate("/"));
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ width: "100%", opacity: "30%" }}
        src={require("../Assets/car.jpeg")}
        alt="carimage"
      />
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: "2em",
          marginLeft: "5%",
          fontSize: "3.5vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
        }}
      >
        The End
      </h1>
      <button
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "30%",
          height: "5%",
          top: "30em",
          left: "35%",
          fontSize: "1vw",
          backgroundColor: "orange",
          border: "1px solid white",
          borderRadius: "15px",
          textAlign: "left",
          paddingLeft: "2em",
          color: "white",
        }}
        onClick={endGame}
      >
        End Game
      </button>
    </div>
  );
};

export default TheEnd;
