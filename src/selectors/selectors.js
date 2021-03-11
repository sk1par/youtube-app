import { createSelector } from "reselect";

export const selectHistoryVideos = state => state.history;
export const selectedVideo = state => state.selectedVideo;
export const allVideos = state => state.videos;


export const selectAllHistoryVideos = createSelector(
    selectHistoryVideos
);