import { RootStateOrAny, useSelector } from 'react-redux';
import IVideos from '../models/videos.interface';
import VideoItem from './VideoItem';

const VideoList = () => {
    const videos = useSelector((state: RootStateOrAny) => state.videos);


    return (
        videos.length > 0 ? <div className='ui relaxed divided list'>
            {videos.map((video: IVideos) =>
                <VideoItem key={video.id.videoId} video={video} />
            )}
        </div> : null
    )
};
export default VideoList;