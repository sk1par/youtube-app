import historyReducer from './historyReducer';

const initialTestState = 1;

  it('should render "History Reducer" correctly', () => {
    const action = {
        type: 'SEARCH_TERM',
        payload: initialTestState
    };
    const initialState = undefined;
    const nextState = historyReducer(initialState,action);

    expect(nextState).toEqual([1]);
  });