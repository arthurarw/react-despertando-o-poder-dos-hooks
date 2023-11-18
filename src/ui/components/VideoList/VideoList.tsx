import Video from "../Video/Video";
import { IVideo } from "../../../data/interfaces/IVideo";
import useVideo from "../../../data/hooks/useVideo";
import { useMemo } from "react";

const VideoList = () => {
  const { state, dispatch } = useVideo();

  const videosList = useMemo(() => {
    const onClick = (video: IVideo) => {
      dispatch({ type: "SET_SELECTED_VIDEO", value: video });
    };

    return state.videoList.map((video: IVideo) => (
      <Video key={video.url} video={video} onClick={onClick} />
    ));
  }, [state.videoList, dispatch]);

  return <ul className="list">{videosList}</ul>;
};

export default VideoList;
