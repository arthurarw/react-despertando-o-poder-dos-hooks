import { IVideo } from "../../../data/interfaces/IVideo";
import { TimeService } from "../../../data/services/TimeService";

interface IProps {
  video: IVideo;
  onClick: (video: IVideo) => void;
}

const Video = ({ video, onClick }: IProps) => {
  return (
    <li onClick={() => onClick(video)}>
      <img src={video.cover} alt={video.title} />
      <span>{TimeService.formatTime(video.duration)}</span>
      <h2>{video.title}</h2>
    </li>
  );
};

export default Video;
