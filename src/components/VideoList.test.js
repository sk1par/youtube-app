import { useSelector } from 'react-redux';
import VideoList from './VideoList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';

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

it('should render correctly', () => {
  const v = getVideo();
  useSelector.mockReturnValueOnce([v]);
  const wrapper = shallow(<VideoList />);
  const title = wrapper.find('[data-auto-id="list-component"]');
  expect(title).toHaveLength(1);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});