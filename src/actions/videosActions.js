import youTubeApi from '../api/youtube';

export const setVideos = (videos) => ({
    type: 'ALL_VIDEOS',
    payload: videos
});

const videos = (term) => async (dispatch) => {
    const response = await youTubeApi.get('/search', {
        params: {
            q: term
        }
    })
    console.log(response);
    const videos = response.data.items;
    dispatch(setVideos(videos));
}

export default videos;