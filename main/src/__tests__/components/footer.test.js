import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import Footer from '../../components/footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  const component = render(<Footer />);
  expect(component).toMatchSnapshot();
});
