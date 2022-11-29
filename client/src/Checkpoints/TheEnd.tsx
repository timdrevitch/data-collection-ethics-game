import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { GreenSpan, OrangeSpan, RedSpan } from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const TheEnd = ({ url, playerId, game }) => {
  const navigate: NavigateFunction = useNavigate();

  const endGame = () => {
    axios
      .put(`${url}/endgame/${playerId}`)
      .then(() =>
        axios.delete(`${url}/deletegame/${game._id}`).then(() => navigate("/"))
      );
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage
        src={require("../Assets/carbackground.png")}
        alt="carimage"
      />
      <CityGif src={require("../Assets/city.gif")} alt="city" />
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: "1em",
          textAlign: "center",
          fontSize: "3.5vw",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
        }}
      >
        Congradulations! You reached the end of the game!
      </h1>
      <h2
        style={{
          position: "absolute",
          width: "100%",
          top: "5em",
          textAlign: "center",
          fontSize: "2vw",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
        }}
      >
        You got the{" "}
        {!game.isHesitant && !game.readTerms ? (
          <RedSpan>BAD</RedSpan>
        ) : !game.isHesitant || !game.readTerms ? (
          <OrangeSpan>AVERAGE</OrangeSpan>
        ) : game.isHesitant && game.readTerms ? (
          <GreenSpan>GREAT</GreenSpan>
        ) : null}{" "}
        ending!
      </h2>
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
