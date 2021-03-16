import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';
import videosActions from '../actions/videosActions';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-redux', () => ({
    useDispatch: () => (fn) => () => fn(),
    useSelector: jest.fn(() => []),
}));

jest.mock('../actions/videosActions', () => {
    const videosActions = jest.fn();
    return videosActions;
});

jest.mock("../api/youtube", () => {
    const videos = [ getVideo() ];
    return {
      get: jest.fn(() => Promise.resolve(videos))
    };
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


it('should render correctly search div', () => {
    const wrapper = shallow(<SearchBar />);
    const searchDiv = wrapper.find('[data-auto-id="search-div"]');
    expect(searchDiv).toHaveLength(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should trigger videos action correctly after submit', () => {
    const wrapper = mount(<SearchBar />);
    const inputText = wrapper.find('[data-auto-id="input-field"]');
    inputText.simulate('change', { target: { value: 'ruse' } });
    const searchButton = wrapper.find('[data-auto-id="submit-button"]');
    searchButton.simulate('click');
    expect(videosActions).toHaveBeenCalledWith('ruse');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

