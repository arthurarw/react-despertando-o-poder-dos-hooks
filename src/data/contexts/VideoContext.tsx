import React, { Dispatch, createContext, useReducer } from "react";
import { videoInitialState, VideoReducer } from "../reducers/VideoReducer";
import { VideoAction, VideoState } from "../interfaces/IVideo";

export const VideoContext = createContext<
  | {
      state: VideoState;
      dispatch: Dispatch<VideoAction>;
    }
  | undefined
>(undefined);

interface IProps {
  children: React.ReactNode;
}

export const VideoProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(VideoReducer, videoInitialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
