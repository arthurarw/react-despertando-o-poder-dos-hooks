import Video from "../Video/Video";
import { IVideo } from "../../../data/interfaces/IVideo";
import useVideo from "../../../data/hooks/useVideo";

const VideoList = () => {
  const { state, dispatch } = useVideo();

  const onClick = (video: IVideo) => {
    dispatch({ type: "SET_SELECTED_VIDEO", value: video });
  };

  return (
    <ul className="list">
      {state.videoList.map((video: IVideo) => (
        <Video key={video.url} video={video} onClick={onClick} />
      ))}
    </ul>
  );
};

export default VideoList;
