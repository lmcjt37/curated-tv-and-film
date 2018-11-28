import React from 'react';
import ReactDOM from 'react-dom';
import FilterBar from '../../components/filterBar';
import render  from 'react-test-renderer';

const yearsMock = [2017,2018,2019,2020];
const mockFunction = () => {}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterBar  years={yearsMock} handleFilter={mockFunction} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
    const component = render.create(<FilterBar years={yearsMock} handleFilter={mockFunction} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
