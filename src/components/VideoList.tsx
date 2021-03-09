import IVideos from '../models/videos.interface';
import VideoItem from './VideoItem';

interface IVideoList {
    videos: IVideos[];
    handleVideoSelect: (video: IVideos) => void
}

const VideoList = ({videos , handleVideoSelect}: IVideoList) => {
    const renderedVideos =  videos.map((video: IVideos) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;