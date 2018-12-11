import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import Autocomplete from '../../components/autocomplete';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Autocomplete />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  const component = render(<Autocomplete />);
  expect(component).toMatchSnapshot();
});
