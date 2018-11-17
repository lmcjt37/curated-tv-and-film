import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../components/footer';
import render  from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
    const component = render.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
