import { useDispatch, useSelector } from 'react-redux';
import History from './History';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';
import selectedVideo from '../actions/selectedVideoActions';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: ()=> action =>action(),
  useSelector: jest.fn(() => []),
}));

jest.mock('../actions/selectedVideoActions', () => {
  const selectedVideo = jest.fn();
  return selectedVideo;
});

const getVideo = () => (
 {id: {
  videoId: '1'
},
snippet: {
  description: 'test',
  title: 'test',
  thumbnails: {
      medium: {
          url: 'test'
      }
  }
}}
);

it('renders correctly', () => {
  const wrapper = shallow(<History />);
  const title = wrapper.find('[data-auto-id="history-title"]');
  expect(title).toHaveLength(1);

  const items = wrapper.find('[data-auto-id="item"]');
  expect(items).toHaveLength(0);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders correctly 2', () => {
  const wrapper = shallow(<History />);
  useSelector.mockReturnValueOnce([getVideo(), getVideo()]);
  const items = wrapper.find('[data-auto-id="item"]');
  expect(items).toHaveLength(2);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders correctly 3', () => {
  const wrapper = shallow(<History />);
  useSelector.mockReturnValueOnce([getVideo()]);
  const [item] = wrapper.find('[data-auto-id="item"]');
  expect(item).toHaveLength(1);
  item.simulate('click');
  expect(selectedVideo).toHaveBeenCalledTimes(1);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});













