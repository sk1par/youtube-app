import { useSelector } from 'react-redux';
import History from './History';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';
import selectedVideo from '../actions/selectedVideoActions';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-redux', () => ({
  useDispatch: () => (fn) => () => fn(),
  useSelector: jest.fn(() => []),
}));

jest.mock('../actions/selectedVideoActions', () => {
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
  const wrapper = shallow(<History />);
  const title = wrapper.find('[data-auto-id="history-title"]');
  expect(title).toHaveLength(1);
  const items = wrapper.find('[data-auto-id="item"]');
  expect(items).toHaveLength(0);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should render multiple items', () => {
  useSelector.mockReturnValueOnce([getVideo(), getVideo()]);
  const wrapper = shallow(<History />);
  const items = wrapper.find('[data-auto-id="item"]');
  expect(items).toHaveLength(2);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should receive obj after click', () => {
  const v = getVideo();
  useSelector.mockReturnValueOnce([v]);
  const wrapper = shallow(<History />);
  const item = wrapper.find('[data-auto-id="item"]');
  item.simulate('click');
  expect(selectedVideo).toHaveBeenCalledTimes(1);
  expect(selectedVideo).toHaveBeenCalledWith(v);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should display no results content', () => {
  const wrapper = shallow(<History />);
  const item = wrapper.find('[data-auto-id="no-results"]');
  expect(item).toHaveLength(1);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});