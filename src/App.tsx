import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import History from './components/History';

function App() {
  return (
    <div className='ui container' style={{ marginTop: '1em' }}>
      <SearchBar />
      <div className='ui grid'>
        <div className="ui row">
          <div className="seven wide column">
            <VideoDetail />
          </div>
          <div className="four wide column">
            <History />
          </div>
          <div className="five wide column">
            <VideoList  />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
