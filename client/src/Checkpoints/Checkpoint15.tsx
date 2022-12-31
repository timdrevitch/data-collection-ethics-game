import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  CityGif,
  DarkFooter,
  DarkFooter2,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint15 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 2) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
    });
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
      <DystContainer
        style={{
          right: "47%",
          top: "23.7%",
          background: "white",
        }}
      >
        <DystrogramImage
          style={{
            height: "29em",
            width: "14.9em",
          }}
          src={require("../Assets/favicon.jpeg")}
          alt="DystogramPicture"
        />
      </DystContainer>
      <WelcomePlayerContainer
        style={{
          right: "29%",
          color: "white",
        }}
      >
        <strong>
          <YellowSpan>Dystogram</YellowSpan>
        </strong>
      </WelcomePlayerContainer>
      <PlayerSinceContainer
        style={{
          right: "34.3%",
          color: "white",
        }}
      >
        Profile&nbsp;&nbsp;&nbsp;
        <span style={{ textDecoration: "underline", color: "yellow" }}>
          Friends
        </span>
        &nbsp;&nbsp;&nbsp; News Feed &nbsp;&nbsp;&nbsp;Settings
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "46%",
          color: "white",
          marginTop: "2em",
          width: "18em",
        }}
      >
        <input
          style={{ width: "95%" }}
          type="search"
          placeholder="Search users 🔍"
          disabled
        />
        <hr />
        👤 User_12345{" "}
        <YellowSpan
          style={{
            background: "blue",
            border: "1px solid white",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "white",
          }}
        >
          Add Friend
        </YellowSpan>
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "gray",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          About:{" "}
          <span style={{ color: "white" }}>
            ⭐️Alexis⭐️ ▪️ AZ ✈️ NJ ▪️ College Athlete 🏀{" "}
          </span>
        </div>
        <br />
        👤 Salopes_1{" "}
        <YellowSpan
          style={{
            background: "blue",
            border: "1px solid white",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "white",
          }}
        >
          Add Friend
        </YellowSpan>
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "gray",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          About: <span style={{ color: "white" }}>Be kind </span>
        </div>
        <br />
        👤 AllenJacobs3{" "}
        {counter > 1 ? (
          <YellowSpan
            style={{
              background: "green",
              border: "1px solid white",
              borderRadius: "5px",
              paddingLeft: "5px",
              paddingRight: "5px",
              color: "white",
            }}
          >
            Remove Friend
          </YellowSpan>
        ) : (
          <YellowSpan
            style={{
              background: "blue",
              border: "1px solid white",
              borderRadius: "5px",
              paddingLeft: "5px",
              paddingRight: "5px",
              color: "white",
            }}
          >
            Add Friend
          </YellowSpan>
        )}
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "gray",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          About:{" "}
          <span style={{ color: "white" }}>
            CS graduate ('42) Working at Dystocity Soft. and Co. as a developer
            intern{" "}
          </span>
        </div>
        <br />
        👤 PresidentBillyBob{" "}
        <YellowSpan
          style={{
            background: "blue",
            border: "1px solid white",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "white",
          }}
        >
          Add Friend
        </YellowSpan>
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "gray",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          About:{" "}
          <span style={{ color: "white" }}>
            BS PhD Student. Former Salesman 💼{" "}
          </span>
        </div>
        <br />
        👤 DystocitySquareShops{" "}
        <YellowSpan
          style={{
            background: "blue",
            border: "1px solid white",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "white",
          }}
        >
          Follow
        </YellowSpan>
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "gray",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          About:{" "}
          <span style={{ color: "white" }}>
            Non-Profit Organization in the Greater Dystocity Area{" "}
          </span>
        </div>
        <br />
      </PlayerSinceContainer>
      <PhoneImage src={require("../Assets/phoneNoBg.png")} alt="phone" />
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
        Checkpoint: {game.checkpoint}
      </h1>
      <div
        style={{
          position: "absolute",
          width: "30%",
          top: "7.5em",
          marginLeft: "60%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>Do you see Allen listed there?... </OrangeSpan>
        ) : (
          <span>Do you see Allen listed there?... </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>Add him as a friend!... </OrangeSpan>
          ) : (
            <span>Add him as a friend!... </span>
          )
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>Good! Now check out his profile!... </OrangeSpan>
          ) : (
            <span>Good! Now check out his profile!... </span>
          )
        ) : null}
        {counter === 2 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 2 && (
        <div
          style={{
            position: "absolute",
            // left: "0",
            right: "15%",
            marginLeft: "60%",
            // marginRight: "10%",
            width: "55%",
            height: "14.2%",
            top: "35em",
            // margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <CheckpointButton
            style={{ float: "right", borderRadius: "67px" }}
            onClick={nextCheckpoint}
          >
            Visit Allen's Profile.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint15;
