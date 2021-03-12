import { useSelector } from 'react-redux';
import IVideos from '../models/videos.interface';
import { allVideos } from '../selectors/selectors';
import VideoItem from './VideoItem';

const VideoList = () => {
    const videos = useSelector(allVideos);


    return (
        videos.length > 0 ? <div className='ui relaxed divided list' data-auto-id="list-component" >
            {videos.map((video: IVideos) =>
                <VideoItem key={video.id.videoId} video={video} />
            )}
        </div> : null
    )
};
export default VideoList;