import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import render  from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot changes when input change', () => {
    const component = render.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
