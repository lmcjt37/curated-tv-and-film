import React from 'react';
import { render, screen } from '@testing-library/react';

import FilterBar from '../../components/filterBar';

const mockHandleFilter = jest.fn();

it('render all initial child components for all', () => {
  var state = {
    years: [],
    filterResults: 'all',
    filterYear: 'All',
    filterGenre: {
      available: [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller'
      ],
      on: []
    },
    filterOrder: 'Ascending'
  };

  render(<FilterBar {...state} handleFilter={mockHandleFilter} />);

  expect(screen.getByTestId('filter-bar')).toBeTruthy();
  expect(screen.getAllByTestId('form-control-label').length).toEqual(3);
  expect(screen.queryByTestId('form-control-years')).toBeFalsy();
  expect(screen.getByTestId('form-control-sort')).toBeTruthy();
  expect(screen.getByTestId('chip-container')).toBeTruthy();
  expect(screen.getAllByTestId('chip').length).toEqual(15);
});

it('render all initial child components for movies', () => {
  var state = {
    years: [2017, 2018, 2019, 2020],
    filterResults: 'movies',
    filterYear: 'All',
    filterGenre: {
      available: [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller'
      ],
      on: []
    },
    filterOrder: 'Ascending'
  };

  render(<FilterBar {...state} handleFilter={mockHandleFilter} />);

  expect(screen.getByTestId('filter-bar')).toBeTruthy();
  expect(screen.getAllByTestId('form-control-label').length).toEqual(3);
  expect(screen.getByTestId('form-control-sort')).toBeTruthy();
  expect(screen.getByTestId('chip-container')).toBeTruthy();
  expect(screen.getAllByTestId('chip').length).toEqual(15);

  expect(screen.getByTestId('form-control-years')).toBeTruthy();
});

it('snapshot of initial component', () => {
  var state = {
    years: [2017, 2018, 2019, 2020],
    filterResults: 'movies',
    filterYear: 'All',
    filterGenre: {
      available: [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller'
      ],
      on: []
    },
    filterOrder: 'Ascending'
  };

  const { asFragment } = render(
    <FilterBar {...state} handleFilter={mockHandleFilter} />
  );
  expect(asFragment).toMatchSnapshot();
});
