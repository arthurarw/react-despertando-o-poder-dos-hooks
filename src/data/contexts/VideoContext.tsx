/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from "react";
import { videoInitialState, VideoReducer } from "../reducers/VideoReducer";

export const VideoCtx = createContext(videoInitialState);

interface IProps {
  children: React.ReactNode;
}

export const VideoContext = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(VideoReducer, videoInitialState);

  return (
    <VideoCtx.Provider value={[state, dispatch] as any}>
      {children}
    </VideoCtx.Provider>
  );
};
