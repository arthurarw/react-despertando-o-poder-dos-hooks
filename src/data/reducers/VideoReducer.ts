/* eslint-disable no-case-declarations */
import { IAction, IVideoContext } from "../interfaces/IVideo";

export const videoInitialState = {
  selectedVideo: {
    id: 2,
    title: "Raindrops",
    duration: 59,
    url: "https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4",
    cover:
      "https://media.istockphoto.com/id/1476189983/pt/foto/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=FTMh3afutejHGrQosOD33OsMsL3udLt51K_r5Yfghp4=",
  },
  videoList: [
    {
      id: 2,
      title: "Raindrops",
      duration: 59,
      url: "https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4",
      cover:
        "https://media.istockphoto.com/id/1476189983/pt/foto/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=FTMh3afutejHGrQosOD33OsMsL3udLt51K_r5Yfghp4=",
    },
    {
      id: 5,
      title: "Pair of Lionesses Walking Together",
      duration: 37,
      url: "https://v3.cdnpk.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
      cover:
        "https://media.istockphoto.com/id/1027482604/pt/foto/pair-of-adult-lions-in-zoological-garden.jpg?s=2048x2048&w=is&k=20&c=wnNfESKu71uGVbjtNyrJzMBYO1_ucm2Wjmt9gZgY0Hs=",
    },
    {
      id: 8,
      title: "Close Up of Lion Cub Resting",
      duration: 29,
      url: "https://v3.cdnpk.net/videvo_files/video/free/2019-08/large_watermarked/190301_02_KenyaWildlife_11_preview.mp4",
      cover:
        "https://images.freeimages.com/images/large-previews/3db/lion-1452882.jpg",
    },
  ],
} as IVideoContext;

export const VideoReducer = (state: IVideoContext, action: IAction) => {
  switch (action.type) {
    case "ADD_NEW_VIDEO":
      const newList = [...state.videoList, action.value];
      return { ...state, videoList: newList };
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
};
