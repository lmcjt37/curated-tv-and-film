import React from 'react';
import ReactDOM from 'react-dom';

import Autocomplete from '../../components/autocomplete';

import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Autocomplete />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  let render = createRender();
  const component = render(<Autocomplete />);
  expect(component).toMatchSnapshot();
});
