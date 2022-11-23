import axios from "axios";
import { useEffect, useState } from "react";
import { OrangeSpan } from "../Styles/SharedStyles";
import {
  BackgroundImage,
  DarkFooter,
  DarkFooter2,
} from "../Styles/TitleScreenStyles";

const Checkpoint1 = ({ url, game, render, setRender }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    console.log(game.isNervious);
  }, [counter, setCounter]);

  const nextCheckpoint = () => {
    axios.put(`${url}/nextcheckpoint/${game._id}`).then(() => {
      setRender(!render);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <BackgroundImage
        style={{
          height: "55vw",
        }}
        src={require("../Assets/Bedroom.png")}
        alt="bedroomimage"
      />
      {/* <CityGif src={require("../Assets/city.gif")} alt="city" /> */}
      <DarkFooter></DarkFooter>
      <DarkFooter2></DarkFooter2>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: ".01em",
          textAlign: "center",
          fontSize: "3.5vw",
          textShadow: "1px 1px 8px #fff, 1px 1px 8px #ccc",
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
        }}
      >
        {game.isNervous ? (
          counter === 0 ? (
            <OrangeSpan>
              You are nervous after all. Don't stress. You have been preparing
              all month!...{" "}
            </OrangeSpan>
          ) : (
            <span>
              You are nervous after all. Don't stress. You have been preparing
              all month!...{" "}
            </span>
          )
        ) : counter === 0 ? (
          <OrangeSpan>
            It is good that you aren't nervious! You don't want to be stressed
            going into these interviews...{" "}
          </OrangeSpan>
        ) : (
          <span>
            It is good that you aren't nervious! You don't want to be stressed
            going into these interviews...{" "}
          </span>
        )}
        {counter >= 1 ? (
          counter === 1 ? (
            <OrangeSpan>
              <em>Ding... </em>
            </OrangeSpan>
          ) : (
            <span>
              <em>Ding... </em>
            </span>
          )
        ) : null}
        {counter >= 2 ? (
          counter === 2 ? (
            <OrangeSpan>
              Why did you just get a text? It's so early. Who could be up?...{" "}
            </OrangeSpan>
          ) : (
            <span>
              Why did you just get a text? It's so early. Who could be up?...{" "}
            </span>
          )
        ) : null}
        {counter === 2 ? null : (
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={() => setCounter(counter + 1)}
          >
            Next
          </button>
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
            width: "25%",
            height: "10%",
            top: "35em",
            margin: "0 auto",
            fontSize: "1vw",
            color: "white",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              float: "left",
              width: "100%",
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
            See who messaged you.
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkpoint1;
