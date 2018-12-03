import React from 'react';
import ReactDOM from 'react-dom';

import FilterBar from '../../components/filterBar';

import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const yearsMock = [2017, 2018, 2019, 2020];
const mockFunction = jest.fn();

var state = {
  years: yearsMock,
  filterResults: 'all',
  filterYear: 'All',
  filterGenre: 'All',
  filterOrder: 'Ascending'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterBar {...state} handleFilter={mockFunction} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  let render = createRender();
  const component = render(
    <FilterBar {...state} handleFilter={mockFunction} />
  );
  expect(component).toMatchSnapshot();
});
