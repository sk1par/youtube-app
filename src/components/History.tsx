import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import IVideos from '../models/videos.interface';
import allActions from '../actions';

const History = () => {
    const historyVideos = useSelector((state: RootStateOrAny) => state.history);
    const dispatch = useDispatch();

    const selectVideo = (video: IVideos) => {
        dispatch(allActions.selectedVideo(video));
    }

    return (
        <>
        <div className='button'>
            <h1>History</h1>
        </div>

        <div>
            {historyVideos.length > 0 ? historyVideos.map((video: IVideos) => {
               return  <p onClick={() => selectVideo(video)} className='link' key={video.id.videoId}>{video.snippet.title}</p>
            }) : <p className='button'>No recent history</p>}
        </div>
        </>
    )
}

export default History
