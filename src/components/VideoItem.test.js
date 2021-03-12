import { useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';
import VideoItem from './VideoItem';
import selectedVideo from '../actions/selectedVideoActions';
import historyAction from '../actions/historyActions';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => (fn) => () => fn(),
    useSelector: jest.fn(() => []),
}));

jest.mock('../actions/selectedVideoActions', () => {
    const selectedVideo = jest.fn();
    return selectedVideo;
});

jest.mock('../actions/historyActions', () => {
    const historyAction = jest.fn();
    return historyAction;
});

const getVideo = () => ({
    id: {
        videoId: '1',
    },
    snippet: {
        description: 'test',
        title: 'test',
        thumbnails: {
            medium: {
                url: 'test',
            },
        },
    },
});

it('should render single video div', () => {
    const wrapper = shallow(<VideoItem video={getVideo()} />);
    const title = wrapper.find('[data-auto-id="video-div"]');
    expect(title).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should receive obj after click', () => {
    const v = getVideo();
    useSelector.mockReturnValueOnce([v]);
    const wrapper = shallow(<VideoItem video={v} />);
    const item = wrapper.find('[data-auto-id="video-div"]');
    item.simulate('click');
    expect(selectedVideo).toHaveBeenCalledTimes(1);
    expect(selectedVideo).toHaveBeenCalledWith(v);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should add video obj to history', () => {
    const v = getVideo();
    useSelector.mockReturnValueOnce([v]);
    const wrapper = shallow(<VideoItem video={v} />);
    const item = wrapper.find('[data-auto-id="video-div"]');
    item.simulate('click');
    expect(historyAction).toHaveBeenCalledTimes(1);
    expect(historyAction).toHaveBeenCalledWith(v);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});