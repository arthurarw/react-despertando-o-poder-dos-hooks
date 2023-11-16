export interface IVideo {
  id: number;
  title: string;
  duration: number;
  url: string;
  cover: string;
}

export interface IVideoContext {
  selectedVideo: IVideo;
  videoList: IVideo[];
}
