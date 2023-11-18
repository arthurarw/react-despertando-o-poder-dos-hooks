/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IVideo {
  id: number;
  title: string;
  duration: string;
  url: string;
  cover: string;
}

export interface IAction {
  type: string;
  value: IVideo;
}

export type VideoState = {
  selectedVideo: IVideo | null;
  videoList: IVideo[];
};

export type VideoAction =
  | { type: "ADD_NEW_VIDEO"; value: IVideo }
  | { type: "SET_SELECTED_VIDEO"; value: IVideo };
