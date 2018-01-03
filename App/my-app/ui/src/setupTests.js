import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.window = global;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

window.addEventListener = () => {};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
window.localStorage = localStorageMock;
