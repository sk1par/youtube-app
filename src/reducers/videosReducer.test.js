import videosReducer from './videosReducer';

const initialTestState = 1;

  it('should render "Videos Reducer" correctly', () => {
    const action = {
        type: 'ALL_VIDEOS',
        payload: initialTestState
    };
    const initialState = undefined;
    const nextState = videosReducer(initialState,action);

    expect(nextState).toEqual(1);
  });