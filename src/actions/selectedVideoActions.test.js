import selectedVideo from './selectedVideoActions';

const initialTestState = 1;

  it('should render action "SELECTED_VIDEO" correctly', () => {
    const action = selectedVideo(initialTestState);

    expect(action).toEqual({
        type: 'SELECTED_VIDEO',
        payload: 1
    });
  });