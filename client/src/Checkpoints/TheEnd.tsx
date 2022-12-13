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
  const interview1: boolean = game.isHesitant && game.readTerms;
  const twoOutOfThree: boolean =
    (!game.commentIncludesInterviewCount && game.postIsGood) ||
    (!game.commentIncludesInterviewCount && game.apiQuestionCorrect) ||
    (game.postIsGood && game.apiQuestionCorrect);
  const interview2: boolean = twoOutOfThree;

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
        Congratulations! You reached the end of the game!
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
        {!interview1 && !interview2 ? (
          <RedSpan>WORST</RedSpan>
        ) : !interview1 || !interview2 ? (
          <OrangeSpan>AVERAGE</OrangeSpan>
        ) : interview1 && interview2 ? (
          <GreenSpan>BEST</GreenSpan>
        ) : null}{" "}
        ending!
      </h2>
      <div
        style={{
          background: "gray",
          position: "absolute",
          width: "70%",
          top: "7.9em",
          textAlign: "center",
          fontSize: "2vw",
          marginLeft: "15%",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
        }}
      >
        Your selections (not all selections affect the ending you got)
      </div>
      <table
        style={{
          position: "absolute",
          width: "70%",
          marginLeft: "15%",
          top: "14em",
          textAlign: "left",
          fontSize: "1.3vw",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
          border: "1px solid gray",
        }}
      >
        <thead>
          <tr>
            <td
              style={{
                borderBottom: "1px solid gray",
                background: "#3a3a3abe",
              }}
            >
              Question
            </td>
            <td
              style={{
                borderBottom: "1px solid gray",
                background: "#3a3a3abe",
              }}
            >
              Answer
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Were you nervous for your interviews?</td>
            <td>{game.isNervous ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Did you study more before opening Dystogram?</td>
            <td>{game.isHesitant ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you read Dystogram's Terms of Service before accepting them?
            </td>
            <td>{game.readTerms ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you choose to fill out optional fields when signing up for the
              Dystogram app?
            </td>
            <td>{game.readTerms ? "No" : "Yes"}</td>
          </tr>
          <tr>
            <td>Did you get the best answer in the first interview?</td>
            <td>{game.isHesitant ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you include how many interviews you have in your comment to
              Allen?
            </td>
            <td>{game.commentIncludesInterviewCount ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did your Dystogram post hurt your chances in the second interview?
            </td>
            <td>{game.postIsGood ? "No" : "Yes"}</td>
          </tr>
          <tr>
            <td>Did you get the question from the second interview correct?</td>
            <td>{game.apiQuestionCorrect ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td
              style={{
                background: "#3a3a3abe",
              }}
            >
              <em>Did the first interview give you a job offer?</em>
            </td>
            <td
              style={{
                background: "#3a3a3abe",
              }}
            >
              {interview1 ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td
              style={{
                background: "#3a3a3abe",
              }}
            >
              <em>Did the second interview give you a job offer?</em>
            </td>
            <td
              style={{
                background: "#3a3a3abe",
              }}
            >
              {interview2 ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "30%",
          height: "5%",
          top: "44em",
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
