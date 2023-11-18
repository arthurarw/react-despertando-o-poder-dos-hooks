import React, { useContext } from "react";
import Video from "../Video/Video";
import { IVideo } from "../../../data/interfaces/IVideo";
import { VideoCtx } from "../../../data/contexts/VideoContext";

const VideoList = () => {
  const { videoList, dispatch } = useContext(VideoCtx);

  console.log(videoList, dispatch);

  const onClick = (video: IVideo) => {
    console.log(video);
    /*videoDispatch({
      type: "SET_SELECTED_VIDEO",
      value: video,
    });*/
  };

  return (
    <ul className="list">
      {videoList.map((video: IVideo) => (
        <Video key={video.id} video={video} onClick={onClick} />
      ))}
    </ul>
  );
};

export default VideoList;
