import { combineReducers } from 'redux';
import history from './historyReducer';
import videos from './videosReducer';
import selectedVideo from './selectedVideoReducer';

const rootReducer = combineReducers({
    history,
    videos,
    selectedVideo
});

export default rootReducer;