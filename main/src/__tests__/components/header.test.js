import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import render  from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
    const component = render.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
