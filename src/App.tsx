import React, { useState } from 'react';
import './App.css';
import youTubeApi from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import IVideos from './models/videos.interface';
import { AxiosResponse } from 'axios';

function App() {
  const [videos, setVideos] = useState<IVideos[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<IVideos>();

  const handleSubmit = async (termFromSearchBar: string) => {
    const response= await youTubeApi.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })

    setVideos(response.data.items);
};

  const handleVideoSelect = (video: IVideos) => {
    console.log(video);
    setSelectedVideo(video);
}

  return (
    <div className='ui container' style={{ marginTop: '1em' }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className='ui grid'>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
