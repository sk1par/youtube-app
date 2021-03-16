import selectedVideoReducer from './selectedVideoReducer';

const initialTestState = 1;

  it('should render "Selected Video Reducer" correctly', () => {
    const action = {
        type: 'SELECTED_VIDEO',
        payload: initialTestState
    };
    const initialState = undefined;
    const nextState = selectedVideoReducer(initialState,action);

    expect(nextState).toEqual(1);
  });