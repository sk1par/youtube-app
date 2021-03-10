const selectedVideo = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_VIDEO':
            return  action.payload
        default:
            return state;       
    }
};

export default selectedVideo;