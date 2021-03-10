const selectedVideo = (videoObj) => {
    return {
        type: 'SELECTED_VIDEO',
        payload: videoObj
    }
}

export default selectedVideo;