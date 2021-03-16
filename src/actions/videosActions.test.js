import {setVideos} from './videosActions';
import videos from './videosActions';

jest.mock("../api/youtube", () => {
    const videos = {data: {
        items: [
            0
        ]
    }};
    return {
        get: (() => Promise.resolve(videos))
    };
  });

const initialTestState = 1;
  
it('should render "ALL_VIDEOS" action correctly', () => {
    const action = setVideos(initialTestState);

    expect(action).toEqual({
        type: 'ALL_VIDEOS',
        payload: 1
    });
});

it('should render "ALL_VIDEOS" mock api call action correctly', async () => {
    const getVideosFn = videos();
    const dispatch = jest.fn();
    await getVideosFn(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
        type: 'ALL_VIDEOS',
        payload: [0]
    });
});