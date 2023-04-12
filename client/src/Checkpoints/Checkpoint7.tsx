import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Context } from "../Shared/Context";
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
  DarkFooter3,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint7 = ({ url, game, render, setRender, player }) => {
  const [counter, setCounter] = useState<number>(0);
  const { isMuted } = useContext(Context);

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

  const nextCheckpoint = (postedAboutArt: boolean) => {
    let data = { postedAboutArtChoice: postedAboutArt };
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
      <DarkFooter3></DarkFooter3>
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
        {counter > 0 ? (
          <>
            <button disabled style={{ background: "green", fontSize: "1vw" }}>
              Comment
            </button>
            <br />
            <input
              placeholder="Type your comment here..."
              style={{ height: "50%", width: "90%", fontSize: "1vw" }}
            />
          </>
        ) : (
          <button style={{ fontSize: "1vw" }} disabled>
            Comment
          </button>
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
      {/* <h1
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
      </h1> */}
      <div
        style={{
          position: "absolute",
          width: "90%",
          top: "11em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          <OrangeSpan>
            Allen must have posted something and tagged me, he just sent me a
            message too...{" "}
          </OrangeSpan>
        ) : (
          <span>
            Allen must have posted something and tagged me, he just sent me a
            message too...{" "}
          </span>
        )}
        {counter >= 1 ? (
          <>
            <br />
            {counter === 1 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Yo <strong>{player.playername}</strong>, you finally hopped on
                  board! Those party snaps are wild, right? Dystogram's where
                  it's at for showcasing life's epic moments. You should join in
                  and post your own stuff
                </em>
                "{" "}
                <audio
                  autoPlay={true}
                  controls={false}
                  loop={false}
                  muted={isMuted}
                  id="myAudio"
                >
                  <source
                    src={require("../Assets/Assets-Fangtai/Audio/SFX/New_DystogramChat.wav")}
                    type="audio/wav"
                  />
                </audio>
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  Yo <strong>{player.playername}</strong>, you finally hopped on
                  board! Those party snaps are wild, right? Dystogram's where
                  it's at for showcasing life's epic moments. You should join in
                  and post your own stuff
                </em>
                "{" "}
              </span>
            )}
          </>
        ) : null}
        {counter >= 2 ? (
          <>
            <br />
            {counter === 2 ? (
              <OrangeSpan>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  You've got mad artistic skills—why not show that off in your
                  profile? You'll rake in a ton more followers with drawings
                  like yours. People love that stuff!
                </em>
                "{" "}
                <audio
                  autoPlay={true}
                  controls={false}
                  loop={false}
                  muted={isMuted}
                  id="myAudio"
                >
                  <source
                    src={require("../Assets/Assets-Fangtai/Audio/SFX/New_DystogramChat.wav")}
                    type="audio/wav"
                  />
                </audio>
              </OrangeSpan>
            ) : (
              <span>
                <YellowSpan>Allen:</YellowSpan> "
                <em>
                  You've got mad artistic skills—why not show that off in your
                  profile? You'll rake in a ton more followers with drawings
                  like yours. People love that stuff!
                </em>
                "{" "}
              </span>
            )}
          </>
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
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "70%",
            height: "13%",
            top: "38em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
            zIndex: "102",
          }}
        >
          <CheckpointButton
            style={{
              float: "left",
              width: "40%",
              height: "130%",
              fontSize: ".9vw",
              padding: "0 3.5em",
            }}
            onClick={() => nextCheckpoint(false)}
          >
            "For now, I choose not to include my artwork in my profile."
          </CheckpointButton>
          <CheckpointButton
            style={{
              float: "right",
              width: "40%",
              height: "130%",
              fontSize: ".9vw",
              padding: "0 3.5em",
            }}
            onClick={() => nextCheckpoint(true)}
          >
            "I am going to add one of my drawings to my profile."
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint7;
