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
  DarkFooter3,
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
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 1) {
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
        Profile&nbsp;&nbsp;&nbsp;Friends&nbsp;&nbsp;&nbsp;
        <span style={{ textDecoration: "underline", color: "yellow" }}>
          News Feed
        </span>
        &nbsp;&nbsp;&nbsp;Settings
      </PlayerSinceContainer>
      <PlayerSinceContainer
        style={{
          right: "46%",
          color: "white",
          marginTop: "2em",
          width: "18em",
        }}
      >
        <hr />
        User_12345 <YellowSpan>posted 6 minutes ago...</YellowSpan>
        <br />
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Someone tell me why I can't stop using this app since downloading it
          today <BlueSpan>#INeedToGoBuySomeGrapes</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        DystocityTechNews <YellowSpan>posted 18 min...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Two major companies in our city have recently been at odds, neither
          company willing to to interact much with personnel from the other
          company
          <BlueSpan> #WatchOut</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        AD: DriverlessCarsNearYou <YellowSpan>posted...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Stop by the Dystocity RT1 Auto Mile and or visit our official website
          to get 20% your first self-driving vehicle{" "}
          <BlueSpan>#DriverlessCarsNearYou #AutoSale</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        PresidentBillyBobOfficail <YellowSpan>posted 30...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Our city has risen to the occasion! I'd like to thank everyone for
          being so supportive! <BlueSpan> #Community #Dystocity</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
        AD: DystocitySquareShops <YellowSpan>posted...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          Have a cat? Visit the commons this week and this week only for premium
          cat litter<BlueSpan> #Cats #Kittens</BlueSpan>
        </div>
        <button style={{ fontSize: "1vw" }} disabled>
          <FaHeart />
        </button>
        <button style={{ fontSize: "1vw" }} disabled>
          Comment
        </button>
        <br />
        <br />
      </PlayerSinceContainer>
      <PhoneImage src={require("../Assets/handNoBg.png")} alt="phone" />
      {/* <DystContainer
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
      <PhoneImage src={require("../Assets/handNoBg.png")} alt="phone" /> */}
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
          width: "30%",
          top: "7.5em",
          marginLeft: "60%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {counter === 0 ? (
          game.viewedCompanyBeef ? (
            <OrangeSpan>
              Hmm, it looks like it actually is between the two companies that I
              am interviewing with. That's some bad luck. I should make sure not
              to let them know I am applying to both places...{" "}
            </OrangeSpan>
          ) : (
            <OrangeSpan>
              There's lots of other posts here. I see why people like this app.
              I could keep reading through these for so long...{" "}
            </OrangeSpan>
          )
        ) : game.viewedCompanyBeef ? (
          <span>
            Hmm, it looks like it actually is between the two companies that I
            am interviewing with. That's some bad luck. I should make sure not
            to let them know I am applying to both places...{" "}
          </span>
        ) : (
          <span>
            There's lots of other posts here. I see why people like this app. I
            could keep reading through these for so long...{" "}
          </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>
              Oh Allen messaged me again. Let me check that out real quick...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Oh Allen messaged me again. Let me check that out real quick...{" "}
            </span>
          )
        ) : null}
        {counter === 1 ? null : (
          <NextButton onClick={() => setCounter(counter + 1)}>
            Next{" "}
            <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
          </NextButton>
        )}
      </div>
      {counter === 1 && (
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
            Check your messages.
          </CheckpointButton>
        </div>
      )}
    </div>
  );
};

export default Checkpoint15;
