import { useContext } from "react";
import { Context } from "../Shared/Context";
import { LimeGreenSpan, OrangeSpan, RedSpan } from "../Styles/SharedStyles";

const PauseMenu = () => {
  const { game } = useContext(Context);
  const TOTAL_CHECKPOINTS: number = 15;
  const percentDone: number = +(
    (game.checkpoint / TOTAL_CHECKPOINTS) *
    100
  ).toFixed(2);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "40%",
        zIndex: "101",
        width: "20vw",
        height: "2vw",
        textAlign: "center",
        fontSize: "1vw",
        backgroundColor: "#1a1d22",
        border: "2px solid #0f1113",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentDone}%`,
          height: "100%",
          position: "absolute",
          backgroundColor: "green",
          float: "left",
          border: "1px solid green",
        }}
      >
        <p
          style={{
            position: "fixed",
            marginTop: "0.25vw",
            left: "40%",
            zIndex: "102",
            width: "20vw",
            height: "1.2vw",
            textAlign: "center",
          }}
        >
          {percentDone < 50 ? (
            <RedSpan>Progress: {percentDone}%</RedSpan>
          ) : percentDone < 75 ? (
            <OrangeSpan>Progress: {percentDone}%</OrangeSpan>
          ) : (
            <LimeGreenSpan>Progress: {percentDone}%</LimeGreenSpan>
          )}
        </p>
      </div>
    </div>
  );
};

export default PauseMenu;
