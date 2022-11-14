import { useContext } from "react";
import { Context } from "../Shared/Context";
import { GreenSpan } from "../Styles/SharedStyles";

const PauseMenu = () => {
  const { game } = useContext(Context);
  const TOTAL_CHECKPOINTS: number = 99;
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "101",
        paddingLeft: "1em",
        paddingRight: "1em",
        fontSize: "1.5vw",
        backgroundColor: "#1a1d22",
      }}
    >
      <p>
        <GreenSpan>
          {((game.checkpoint / TOTAL_CHECKPOINTS) * 100).toFixed(2)}%
        </GreenSpan>
      </p>
    </div>
  );
};

export default PauseMenu;
