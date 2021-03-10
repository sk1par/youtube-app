import { useDispatch } from 'react-redux';
import allActions from '../actions';
import IVideos from '../models/videos.interface';

interface VideosProps {
    video: IVideos;
}

const VideoItem = ({video }: VideosProps) => {
    const dispatch = useDispatch();

    const selectVideo = (video: IVideos) => {
        dispatch(allActions.selectedVideo(video));
        dispatch(allActions.history(video));
    }

    return (
        <div onClick={() => selectVideo(video)} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;