import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallowToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

let wrapper: any;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('renders correctly', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
