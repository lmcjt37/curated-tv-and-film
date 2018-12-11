import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import Header from '../../components/header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
});
