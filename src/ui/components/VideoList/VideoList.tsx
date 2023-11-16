import React, { useContext } from "react";
import Video from "../Video/Video";
import { IVideo } from "../../../data/interfaces/IVideo";
import { videoStore } from "../../../data/contexts/VideoContext";

const VideoList = () => {
  const { videoList } = useContext(videoStore);

  const onClick = (video: IVideo) => {
    console.log(video);
  };

  return (
    <ul className="list">
      {videoList.map((video) => (
        <Video key={video.id} video={video} onClick={onClick} />
      ))}
    </ul>
  );
};

export default VideoList;
