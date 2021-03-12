import { useSelector } from 'react-redux';
import VideoDetail from './VideoDetail';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';
import selectedVideo from '../actions/selectedVideoActions';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => (fn) => () => fn(),
  useSelector: jest.fn(() => []),
}));

jest.mock('../actions/videosActions', () => {
  const selectedVideo = jest.fn();
  return selectedVideo;
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

it('should render search keyword div', () => {
    useSelector.mockReturnValueOnce([]);
    const wrapper = mount(<VideoDetail />);
    const searchDiv = wrapper.find('[data-auto-id="search-keyword-div"]');
    expect(searchDiv).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should render video detail div', () => {
    useSelector.mockReturnValueOnce(getVideo());
    const wrapper = shallow(<VideoDetail />);
    const videoDetailDiv = wrapper.find('[data-auto-id="video-details-div"]');
    expect(videoDetailDiv).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

