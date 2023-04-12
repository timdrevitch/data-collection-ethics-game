import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  CheckpointButton,
  GreenSpan,
  OrangeSpan,
  RedItalicSpan,
  RedSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const TheEnd = ({ url, playerId, game }) => {
  const navigate: NavigateFunction = useNavigate();
  const interview1: boolean =
    !game.postedAboutArt && game.readTerms && !game.postAboutInterviews;
  const twoOutOfThree: boolean =
    !game.commentIncludesInterviewCount &&
    game.viewedCompanyBeef &&
    !game.askedAboutSearch;
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
      <BackgroundImage src={require("../Assets/innerCar.png")} alt="carimage" />
      <CityGif src={require("../Assets/drive3.gif")} alt="city" />
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
        ending!{" "}
        {!interview1 && !interview2 ? (
          <RedSpan>Neither interview gave you a job offer.</RedSpan>
        ) : !interview1 || !interview2 ? (
          <OrangeSpan>One interview gave you a job offer.</OrangeSpan>
        ) : interview1 && interview2 ? (
          <GreenSpan>Both interviews gave you job offers!</GreenSpan>
        ) : null}{" "}
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
          {/* <tr>
            <td>Were you nervous for your interviews?</td>
            <td>{game.isNervous ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Did you study more before opening Dystogram?</td>
            <td>{game.isHesitant ? "Yes" : "No"}</td>
          </tr> */}
          <tr>
            <td>
              Did you read Dystogram's Terms of Service before accepting them?
            </td>
            <td>{game.readTerms ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Did you choose to post your artwork to the Dystogram app?</td>
            <td>{game.postedAboutArt ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did the first interviewer ask you to apply for an illustrator
              position?
            </td>
            <td>{game.postedAboutArt ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you investigate the news post about two companies being at
              odds?
            </td>
            <td>{game.viewedCompanyBeef ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you ask about how the manager knew you had looked him up in
              the second interview?
            </td>
            <td>{game.askedAboutSearch ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>
              Did you tell the second interviewer that you were doing multiple
              interviews?
            </td>
            <td>{game.commentIncludesInterviewCount ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Did you post about your day of interviewing?</td>
            <td>{game.postAboutInterviews ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td
              style={{
                background: "#3a3a3abe",
                color: "greenyellow",
              }}
            >
              <em>Did the first interview give you a job offer?</em>
            </td>
            <td
              style={{
                background: "#3a3a3abe",
                color: "greenyellow",
              }}
            >
              {interview1 ? <em>YES</em> : <RedItalicSpan>NO</RedItalicSpan>}
            </td>
          </tr>
          <tr>
            <td
              style={{
                background: "#3a3a3abe",
                color: "greenyellow",
              }}
            >
              <em>Did the second interview give you a job offer?</em>
            </td>
            <td
              style={{
                background: "#3a3a3abe",
                color: "greenyellow",
              }}
            >
              {interview2 ? <em>YES</em> : <RedItalicSpan>NO</RedItalicSpan>}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          position: "absolute",
          width: "70%",
          marginLeft: "15%",
          top: "30em",
          fontSize: "1.3vw",
          textShadow: "1px 1px 4px lightsalmon, 1px 1px 8px lightsalmon",
          border: "1px solid gray",
          textAlign: "center",
        }}
      >
        You’re data will never be saved or shared by playing this game, unlike
        using Dystogram.
      </div>
      <CheckpointButton
        style={{
          cursor: "pointer",
          position: "absolute",
          width: "14em",
          height: "5.5em",
          top: "72%",
          left: "43%",
          fontSize: "1vw",
          textAlign: "center",
          paddingLeft: "2em",
          color: "white",
        }}
        onClick={endGame}
      >
        End Game
      </CheckpointButton>
    </div>
  );
};

export default TheEnd;
