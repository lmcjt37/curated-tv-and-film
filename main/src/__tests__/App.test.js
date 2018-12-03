import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot changes when input change', () => {
  let render = createRender();
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
