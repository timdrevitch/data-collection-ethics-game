import { useContext } from "react";
import { Context } from "../Shared/Context";
import { ImVolumeHigh, ImVolumeMute2 } from "react-icons/im";

const AudioToggle = ({ audioId }) => {
  const { isMuted, setIsMuted } = useContext(Context);

  const toggleAudio = () => {
    audioId.play();
    setIsMuted(!isMuted);
  };

  return (
    <button
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "101",
        border: "2px solid #0f1113",
        cursor: "pointer",
        backgroundColor: "#1a1d22",
        padding: "1.25em",
        color: "white",
      }}
      onClick={toggleAudio}
    >
      {isMuted ? <ImVolumeMute2 size="50" /> : <ImVolumeHigh size="50" />}
    </button>
  );
};

export default AudioToggle;
