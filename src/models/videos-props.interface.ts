import IVideos from "./videos.interface";

export default interface VideosProps {
    video: IVideos;
    handleVideoSelect: (video: IVideos) => void
}