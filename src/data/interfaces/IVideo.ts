/* eslint-disable @typescript-eslint/no-explicit-any */
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
  state: IVideoContext;
  dispatch: React.Dispatch<any>;
}

export interface IAction {
  type: string;
  value: IVideo;
}
