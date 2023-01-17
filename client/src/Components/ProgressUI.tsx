import { useContext } from "react";
import { Context } from "../Shared/Context";
import { LimeGreenSpan, OrangeSpan, RedSpan } from "../Styles/SharedStyles";

const PauseMenu = () => {
  const { game } = useContext(Context);
  const TOTAL_CHECKPOINTS: number = 25;
  const percentDone: number = +(
    (game.checkpoint / TOTAL_CHECKPOINTS) *
    100
  ).toFixed(2);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "15%",
        zIndex: "104",
        width: "70vw",
        height: "3vw",
        textAlign: "center",
        fontSize: "1vw",
        backgroundColor: "#2e3136",
        border: "2px solid #0f1113",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentDone}%`,
          height: "100%",
          position: "absolute",
          background:
            "linear-gradient(90deg, rgba(193,233,191,0.5) 0%, rgba(3,150,26,1) 100%)",
          float: "left",
          // border: "1px solid green",
          // boxShadow: "0 0 15px #77f577",
          // clipPath: "inset(0px -15px 0px 0px)",
        }}
      >
        <p
          style={{
            position: "fixed",
            marginTop: "0.75vw",
            left: "40%",
            zIndex: "106",
            width: "20vw",
            height: "1vw",
            textAlign: "center",
            backgroundColor:
              "linear-gradient(90deg, rgba(193,233,191,0) 0%, rgba(3,150,26,1) 100%)",
            transition: "all 0.5s ease-in-out",
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
