import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '../../components/header';

const TestComponent = () => {
  const [showFilters, toggleFilter] = React.useState(false);
  const [showGrid, toggleGrid] = React.useState(false);

  return (
    <Header
      autoComplete={[]}
      showFilters={showFilters}
      toggleFilter={() => toggleFilter(!showFilters)}
      showGrid={showGrid}
      toggleGrid={() => toggleGrid(!showGrid)}
    />
  );
};

it('render all initial child components', () => {
  render(<Header autoComplete={[]} />);

  expect(screen.getByTestId('search-icon')).toBeTruthy();
  expect(screen.getByTestId('auto-complete-input')).toBeTruthy();
  expect(screen.getByTestId('tune-icon')).toBeTruthy();
  expect(screen.getByTestId('grid-icon')).toBeTruthy();
  expect(screen.queryByTestId('clear-icon')).toBeFalsy();
  expect(screen.queryByTestId('close-icon')).toBeFalsy();
  expect(screen.queryByTestId('row-icon')).toBeFalsy();
});

it('filter menu appears when user clicks to show', async () => {
  render(<TestComponent />);

  expect(screen.queryByTestId('close-icon')).toBeFalsy();
  expect(screen.getByTestId('tune-icon')).toBeTruthy();

  await userEvent.click(screen.getByTestId('tune-icon'));

  expect(screen.queryByTestId('tune-icon')).toBeFalsy();
  expect(screen.getByTestId('close-icon')).toBeTruthy();
});

it('layout icons update when user clicks either icon', async () => {
  render(<TestComponent />);

  expect(screen.queryByTestId('row-icon')).toBeFalsy();
  expect(screen.getByTestId('grid-icon')).toBeTruthy();

  await userEvent.click(screen.getByTestId('grid-icon'));

  expect(screen.getByTestId('row-icon')).toBeTruthy();
  expect(screen.queryByTestId('grid-icon')).toBeFalsy();
});

it('snapshot of initial component', () => {
  const { asFragment } = render(<Header autoComplete={[]} />);
  expect(asFragment).toMatchSnapshot();
});
