import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import selectedVideo from '../actions/selectedVideoActions';
import IVideos from '../models/videos.interface';
import { selectHistoryVideos } from '../selectors/selectors';

const History = () => {
    const historyVideos = useSelector(selectHistoryVideos);
    const dispatch = useDispatch();

    const selectVideo = (video: IVideos) => {
        dispatch(selectedVideo(video));
    }

    return (
        <>
        <div className='button'>
            <h1>History</h1>
        </div>

        <div>
            {historyVideos?.length > 0 ? historyVideos.map((video: IVideos) => {
               return  <p onClick={() => selectVideo(video)} className='link' key={video.id.videoId}>{video.snippet.title}</p>
            }) : <p className='button'>No recent history</p>}
        </div>
        </>
    )
}

export default History
