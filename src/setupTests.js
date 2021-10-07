import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

React.useLayoutEffect = React.useEffect;

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

jest.useFakeTimers('modern');
jest.setSystemTime(new Date(2021, 1, 1));
