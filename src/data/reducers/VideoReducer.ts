/* eslint-disable no-case-declarations */
import { VideoAction, VideoState } from "../interfaces/IVideo";
import { StorageService } from "../services/StorageService";

export const videoInitialState: VideoState = {
  selectedVideo: null,
  videoList: StorageService.get("videoList", []),
};

export const VideoReducer = (
  state: VideoState,
  action: VideoAction,
): VideoState => {
  switch (action.type) {
    case "ADD_NEW_VIDEO":
      const newList = [...state.videoList, action.value];
      StorageService.set("videoList", newList);
      return { ...state, videoList: newList };
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
};
