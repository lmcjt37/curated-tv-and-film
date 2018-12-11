import React from 'react';
import ReactDOM from 'react-dom';
import { render, mount } from 'enzyme';

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot changes when input change', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});

it('always renders a div', () => {
  const wrapper = mount(<App />);
  const divs = wrapper.find('div');
  expect(divs.length).toBeGreaterThan(0);
});
