import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }

  return context;
};

export default useVideo;
