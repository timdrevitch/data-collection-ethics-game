import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  BlueSpan,
  NextButton,
  OrangeSpan,
  RedSpan,
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
  PlayerImage,
  PlayerSinceContainer,
  WelcomePlayerContainer,
} from "../Styles/TitleScreenStyles";

const Checkpoint14 = ({ url, game, render, setRender, player }) => {
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
          right: "28%",
          color: "white",
        }}
      >
        News Feed
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
          on his first round of interviews today!!
          <BlueSpan> #JobHunt</BlueSpan>
        </div>
        <br />
        LiverKingOfficail <YellowSpan>posted 30 min...</YellowSpan>
        <div
          style={{
            width: "90%",
            backgroundColor: "white",
            opacity: "70%",
            color: "black",
            padding: ".1em",
          }}
        >
          I'm not natty<BlueSpan> #RuseIsUp #EatUnsanitaryPlease</BlueSpan>
        </div>
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
          width: "90%",
          top: "10em",
          marginLeft: "5%",
          fontSize: "2vw",
          textShadow: "1px 1px 4px gray, 2px 2px 8px midnightblue",
        }}
      >
        {game.readTerms ? (
          counter === 0 ? (
            <OrangeSpan>
              The terms says that the app shares user data. You should probably{" "}
              <em>ONLY</em> provide required info when signing up...{" "}
            </OrangeSpan>
          ) : (
            <span>
              The terms says that the app shares user data. You should probably{" "}
              <em>ONLY</em> provide required info when signing up...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            Looks like it's time to fill out your profile now!...{" "}
          </OrangeSpan>
        ) : (
          <span>Looks like it's time to fill out your profile now!... </span>
        )}
        {counter >= 1 ? (
          game.readTerms ? (
            counter === 1 ? (
              <OrangeSpan>
                Fill out the required fields and then sign up...{" "}
              </OrangeSpan>
            ) : (
              <span>Fill out the required fields and then sign up... </span>
            )
          ) : counter === 1 ? (
            <OrangeSpan>
              Fill out the required & optional fields and then complete your
              sign up!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Fill out the required & optional fields and then complete your
              sign up!...{" "}
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
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "25%",
            height: "10%",
            top: "35em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          {game.readTerms ? (
            <>
              <button
                style={{
                  float: "left",
                  width: "45%",
                  height: "100%",
                  fontSize: "1vw",
                  backgroundColor: "red",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  padding: "0 1.5em",
                  color: "white",
                }}
                disabled
              >
                <em>First choice unavailable due to prior actions.</em>
              </button>
              <button
                style={{
                  cursor: "pointer",
                  float: "right",
                  width: "45%",
                  height: "100%",
                  fontSize: "1vw",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  padding: "0 1.5em",
                  color: "white",
                }}
                onClick={nextCheckpoint}
              >
                Fill out ONLY the required parts of the sign up form and
                continue.
              </button>
            </>
          ) : (
            <>
              <button
                style={{
                  cursor: "pointer",
                  float: "left",
                  width: "45%",
                  height: "100%",
                  fontSize: "1vw",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  padding: "0 1.5em",
                  color: "white",
                }}
                onClick={nextCheckpoint}
              >
                Fill out the FULL sign up form and continue.
              </button>
              <button
                style={{
                  float: "right",
                  width: "45%",
                  height: "100%",
                  fontSize: "1vw",
                  backgroundColor: "red",
                  border: "1px solid white",
                  borderRadius: "15px",
                  textAlign: "left",
                  padding: "0 1.5em",
                  color: "white",
                }}
                disabled
              >
                <em>Second choice unavailable due to prior actions.</em>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkpoint14;
