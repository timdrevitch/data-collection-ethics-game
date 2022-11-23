import { useContext } from "react";
import { Context } from "../Shared/Context";
import { GreenSpan, LimeGreenSpan } from "../Styles/SharedStyles";

const PauseMenu = () => {
  const { game } = useContext(Context);
  const TOTAL_CHECKPOINTS: number = 3;
  const percentDone: number = +(
    (game.checkpoint / TOTAL_CHECKPOINTS) *
    100
  ).toFixed(2);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "101",
        width: "10vw",
        height: "5vw",
        textAlign: "center",
        fontSize: "1.5vw",
        backgroundColor: "#1a1d22",
        border: "1px solid #0f1113",
        // borderLeft: `${percentDone}% solid red`,
      }}
    >
      <div
        style={{
          width: `${percentDone}%`,
          height: "100%",
          position: "absolute",
          backgroundColor: "green",
          float: "left",
        }}
      >
        <p
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "101",
            width: "10vw",
            height: "5vw",
            textAlign: "center",
          }}
        >
          <LimeGreenSpan>{percentDone}%</LimeGreenSpan>
        </p>
      </div>
    </div>
  );
};

export default PauseMenu;
