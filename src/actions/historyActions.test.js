import historyActions from './historyActions';

const initialTestState = 1;

  it('should render action "SEARCH_TERM" correctly', () => {
    const action = historyActions(initialTestState);

    expect(action).toEqual({
        type: 'SEARCH_TERM',
        payload: 1
    });
  });