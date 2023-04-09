import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Context } from "../Shared/Context";
import {
  CheckpointButton,
  NextButton,
  OrangeSpan,
  YellowSpan,
} from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
  DystContainer,
  DystrogramImage,
  PhoneImage,
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint5 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);
  const { setBackgroundMusic } = useContext(Context);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervous);
  }, [counter, setCounter]);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "ArrowRight" || event.key === " ") && counter < 3) {
      console.log(event.key + " eventListener");
      setCounter(counter + 1);
    }
  });

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
      setBackgroundMusic("car");
    });
  };

  return (
    <>
      <img
        style={{
          opacity: "80%",
          position: "absolute",
          zIndex: "101",
          width: "30%",
          top: "13.5em",
          marginLeft: "51.5%",
          fontSize: "1.5vw",
        }}
        src={require("../Assets/catGif3.gif")}
        alt="cat"
      />
      <div style={{ position: "relative" }}>
        <BackgroundImage
          style={{
            height: "55vw",
          }}
          src={require("../Assets/bedroom3.jpg")}
          alt="bedroomimage"
        />
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
          {counter > 0 ? (
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
              CS graduate ('42) Working at Dystocity Soft. and Co. as a
              developer intern{" "}
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
            top: "10em",
            marginLeft: "5%",
            fontSize: "2vw",
            textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
            zIndex: "102",
          }}
        >
          {counter === 0 ? (
            <OrangeSpan>
              I use my mobile phone number to locate Allen's account and follow
              him...{" "}
            </OrangeSpan>
          ) : (
            <span>
              I use my mobile phone number to locate Allen's account and follow
              him...{" "}
            </span>
          )}
          {counter >= 1 ? (
            <>
              {counter === 1 ? (
                <OrangeSpan>
                  Consequently, Dystogram intelligently suggests numerous other
                  accounts for me to follow, many of whom are my classmates...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  Consequently, Dystogram intelligently suggests numerous other
                  accounts for me to follow, many of whom are my classmates...{" "}
                </span>
              )}
            </>
          ) : null}
          {counter >= 2 ? (
            <>
              {counter === 2 ? (
                <OrangeSpan>
                  As I look at the vibrant pictures from the party, my mind
                  floods with cherished memories of that day...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  As I look at the vibrant pictures from the party, my mind
                  floods with cherished memories of that day...{" "}
                </span>
              )}
            </>
          ) : null}
          {counter >= 3 ? (
            <>
              {counter === 3 ? (
                <OrangeSpan>
                  Oh no! It's later than I thought. I should make my way to the
                  interview now...{" "}
                </OrangeSpan>
              ) : (
                <span>
                  Oh no! It's later than I thought. I should make my way to the
                  interview now...{" "}
                </span>
              )}
            </>
          ) : null}
          {counter === 3 ? null : (
            <NextButton onClick={() => setCounter(counter + 1)}>
              Next{" "}
              <BsFillArrowRightCircleFill style={{ verticalAlign: "middle" }} />
            </NextButton>
          )}
        </div>
        {counter === 3 && (
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              marginLeft: "0",
              marginRight: "auto",
              width: "50%",
              height: "14.7%",
              top: "38em",
              margin: "0 auto",
              fontSize: "1vw",
              color: "white",
              zIndex: "102",
            }}
          >
            <CheckpointButton
              style={{ float: "right" }}
              onClick={nextCheckpoint}
            >
              Get in your car and head to your first interview.
            </CheckpointButton>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkpoint5;
