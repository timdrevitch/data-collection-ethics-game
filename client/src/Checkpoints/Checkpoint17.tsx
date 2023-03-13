import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import {
  BlueSpan,
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

const Checkpoint17 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);
  const value1: string = `: Thanks Allen! One down, one to go! I'll let you know how it goes :).`;
  const value2: string = `: Thanks Allen! Hopefully all of this preparing will pay off! I'll let you know how it goes :).`;

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

  const nextCheckpoint = (postChoice: boolean) => {
    let data = { postChoice: postChoice };
    axios.put(`${url}/nextcheckpoint/${game._id}`, data).then(() => {
      setRender(!render);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage src={require("../Assets/innerCar.png")} alt="carimage" />
      <CityGif src={require("../Assets/drive3.gif")} alt="city" />
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
          src={require("../Assets/favicon2.jpg")}
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
        <hr style={{ width: "58%", float: "left" }} />
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "34.3%",
          color: "white",
          marginTop: "2em",
        }}
      >
        <img
          src={require("../Assets/drev.png")}
          alt="carl"
          style={{ display: "inline-block", borderRadius: "50%", width: "5%" }}
        />
        AllenJacobs3{" "}
        <YellowSpan
          style={{
            background: "green",
            border: "1px solid white",
            borderRadius: "5px",
            paddingLeft: "3px",
            paddingRight: "3px",
            color: "white",
          }}
        >
          Remove Friend
        </YellowSpan>
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "46%",
          color: "white",
          marginTop: "4em",
          width: "18em",
        }}
      >
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
        <div>
          <span style={{ textDecoration: "underline", color: "yellow" }}>
            Posts (31)
          </span>
          &nbsp;&nbsp;&nbsp; Friends (83) &nbsp;&nbsp;&nbsp;
        </div>
        <hr style={{ width: "95%", float: "left" }} />
        <br />
        AllenJackobs3 <YellowSpan>posted 19 minutes...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Good luck to my good friend <BlueSpan>@{player.playername}</BlueSpan>{" "}
          on their first round of interviews today!!
          <BlueSpan> #JobHunt</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        {game.commentIncludesInterviewCount ? (
          <>
            <button disabled style={{ fontSize: "1vw" }}>
              Comment
            </button>
            <br />
            <div
              style={{
                borderLeft: "1px solid white",
                paddingLeft: "3px",
                width: "90%",
                fontSize: "1vw",
              }}
            >
              <YellowSpan>@{player.playername}</YellowSpan>
              {value1}
            </div>
          </>
        ) : (
          <>
            <button style={{ fontSize: "1vw" }} disabled>
              Comment
            </button>
            <br />
            <div
              style={{
                borderLeft: "1px solid white",
                paddingLeft: "3px",
                width: "90%",
                fontSize: "1vw",
              }}
            >
              <YellowSpan>@{player.playername}</YellowSpan>
              {value2}
            </div>
          </>
        )}
        <br />
        <br />
        AllenJackobs3 <YellowSpan>posted 1 day ago...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Dystocity seems less busy lately. All these self-driving cars
          practically got rid of traffic all together!
          <BlueSpan> #City #Dystocity</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        AllenJackobs3 <YellowSpan>posted 3 days ago...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          I have only had this app for about a week now, and I can't stop going
          back to it! It's so cool that I can keep up with my friends on here
          whenever I want!
          <BlueSpan> #Dystogram</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        AllenJackobs3 <YellowSpan>posted 3 days ago...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          It is so nice out today. I need to go outside later!
          <BlueSpan> #GoodWeather</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
      </PlayerSinceContainer>
      <PhoneImage src={require("../Assets/handNoBg.png")} alt="phone" />
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
          <OrangeSpan>Nice comment!... </OrangeSpan>
        ) : (
          <span>Nice comment!... </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>You are almost at your second interview... </OrangeSpan>
          ) : (
            <span>You are almost at your second interview... </span>
          )
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>Try making a post before you get there!... </OrangeSpan>
          ) : (
            <span>Try making a post before you get there!... </span>
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
            top: "25em",
            // margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <CheckpointButton
            style={{
              float: "right",
              borderRadius: "67px",
              fontSize: ".85vw",
              paddingLeft: "6%",
            }}
            onClick={() => nextCheckpoint(true)}
          >
            Post:
            <br />
            "I am always trying to keep my programming skills up to date! Read
            about my progress on the blog website I built! If you sign up on it,
            you can leave comments and feedback for me!"
          </CheckpointButton>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CheckpointButton
            style={{
              float: "right",
              borderRadius: "67px",
              fontSize: ".85vw",
              paddingLeft: "6%",
            }}
            onClick={() => nextCheckpoint(false)}
          >
            Post:
            <br />
            "I have been enjoying creating beautiful website designs lately! My
            recent side projects have had great UI/UX design, have been
            responsive, and are easy and intuitive to use!"
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint17;
