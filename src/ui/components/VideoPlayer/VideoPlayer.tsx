import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TimeService } from "../../../data/services/TimeService";
import { videoStore } from "../../../data/contexts/VideoContext";

const VideoPlayer = () => {
  const { selectedVideo } = useContext(videoStore);

  const video = selectedVideo;
  const videoRef = useRef();
  const progressTimer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const play = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const onProgress = () => {
    setProgress(videoRef.current.currentTime);
  };

  const onChangeProgress = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt(event.target.value));
  };

  const setTime = (time: number) => {
    videoRef.current.currentTime = time;
    onProgress();
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", play);
    videoElement.addEventListener("pause", pause);
    videoElement.addEventListener("seeked", onProgress);
    setTime(0);
    pause();

    return () => {
      videoElement.removeEventListener("play", play);
      videoElement.removeEventListener("pause", pause);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [video]);

  useEffect(() => {
    clearInterval(progressTimer.current);

    if (isPlaying) {
      progressTimer.current = setInterval(onProgress, 1000);
    }
  }, [isPlaying]);

  return (
    <div className="video-player">
      <video src={video.url} ref={videoRef} />
      {video.url && (
        <>
          <div className="controls">
            <button onClick={isPlaying ? pause : play}>
              {isPlaying ? "||" : "|>"}
            </button>
            <span>
              {TimeService.formatTime(Math.round(progress))} /{" "}
              {TimeService.formatTime(video.duration)}
            </span>
            <input
              type="range"
              min={0}
              max={video.duration}
              step={0.1}
              onChange={onChangeProgress}
            />
          </div>
          <h2>{video.title}</h2>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
