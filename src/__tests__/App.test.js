import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { animateScroll as scroll } from 'react-scroll';
import ConnectedApp, {
  App,
  handleYear,
  handleChange,
  handleFilter,
  handleToggleChip,
  handleOrder,
  goTop
} from '../App';
import content from '../content';

it('render all initial child components', async () => {
  render(<ConnectedApp />);

  expect(screen.getByTestId('header')).toBeTruthy();
  expect(screen.getByTestId('filter-bar')).toBeTruthy();
  expect(screen.getByTestId('main')).toBeTruthy();
  expect(screen.getByTestId('footer')).toBeTruthy();
  expect(screen.getAllByTestId('card').length).toBeGreaterThan(0);
  expect(screen.getAllByTestId('multi-card').length).toBeGreaterThan(0);
  expect(screen.queryByTestId('error-no-result')).toBeFalsy();
  expect(screen.queryByTestId('error-load')).toBeFalsy();
});

it('renders error component for no search results', async () => {
  render(<ConnectedApp />);

  await userEvent.type(
    screen.getByTestId('auto-complete-input'),
    'random text with no search result'
  );

  expect(screen.getByTestId('error-no-result')).toBeDefined();
  const text = within(screen.getByTestId('error-no-result')).getByText(
    'No search result.'
  );
  expect(text).toBeTruthy();
});

it("renders error component when it can't load the data", async () => {
  const classes = { content: '', error: 'test-error' };
  const showFilters = false;
  const search = false;
  const autoComplete = [];
  const showGrid = false;
  const filterResults = 'all';
  const filterYear = 'All';
  const filterOrder = 'Ascending';
  const years = [];
  const content = [];
  const filterGenre = {
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
  };

  render(
    <App
      showFilters={showFilters}
      search={search}
      autoComplete={autoComplete}
      showGrid={showGrid}
      callHandleChange={jest.fn()}
      goTop={jest.fn()}
      toggleFilter={jest.fn()}
      toggleGrid={jest.fn()}
      filterResults={filterResults}
      filterYear={filterYear}
      filterGenre={filterGenre}
      filterOrder={filterOrder}
      years={years}
      callHandleToggleChip={jest.fn()}
      callHandleFilter={jest.fn()}
      callHandleYear={jest.fn()}
      callHandleOrder={jest.fn()}
      classes={classes}
      content={content}
    />
  );

  expect(screen.getByTestId('error-load')).toBeDefined();
  const text = within(screen.getByTestId('error-load')).getByText(
    "Can't load the data."
  );
  expect(text).toBeTruthy();
});

it('calls handleChange correctly', () => {
  let setAutoCompleteArg;
  let setSearchArg;
  let setContentArg;
  const mockSetAutoComplete = (arg) => (setAutoCompleteArg = arg);
  const mockSetSearch = (arg) => (setSearchArg = arg);
  const mockSetContent = (arg) => (setContentArg = arg);

  const event = { target: { value: '' } };
  handleChange(
    event,
    content,
    mockSetAutoComplete,
    mockSetSearch,
    mockSetContent
  );

  expect(setSearchArg).toBeFalsy();
  expect(setAutoCompleteArg).toEqual([]);
  expect(setContentArg.length).toBeGreaterThan(1);

  event.target.value = 'neverToEqualATitle123';
  handleChange(
    event,
    content,
    mockSetAutoComplete,
    mockSetSearch,
    mockSetContent
  );

  expect(setSearchArg).toBeTruthy();
  expect(setAutoCompleteArg).toEqual([]);
  expect(setContentArg.length).toEqual(0);
});

it('calls handleYear correctly', () => {
  let onlyMovies = content.filter((value) => value.type === 'movie');
  let allContentLength = onlyMovies.length;
  const event = { target: { value: '2003' } };
  const setContent = jest.fn().mockImplementation((arg) => {
    expect(arg.length).toBeLessThan(allContentLength);
  });
  const setFilterYear = jest.fn().mockImplementation((arg) => {
    expect(arg).toEqual(event.target.value);
  });

  handleYear(event, onlyMovies, setFilterYear, setContent);
});

it('calls handleFilter correctly for TV', () => {
  let setFilterResultsArg;
  let setContentArg;
  let setYearsArg;
  let setFilterYearArg;
  const mockSetFilterResults = (arg) => (setFilterResultsArg = arg);
  const mockSetContent = (arg) => (setContentArg = arg);
  const mockSetYears = (arg) => (setYearsArg = arg);
  const mockSetFilterYear = (arg) => (setFilterYearArg = arg);
  const mockSetOnlyMovies = jest.fn();

  const event = { target: { value: 'all' } };
  handleFilter(
    event,
    content,
    content,
    mockSetFilterResults,
    mockSetContent,
    mockSetYears,
    mockSetFilterYear,
    mockSetOnlyMovies
  );

  expect(setContentArg.length).toBeGreaterThan(1);
  expect(setFilterResultsArg).toEqual('all');
  expect(setFilterYearArg).toEqual('All');
  expect(setYearsArg.length).toBeGreaterThan(0);

  event.target.value = 'tv';
  handleFilter(
    event,
    content,
    content,
    mockSetFilterResults,
    mockSetContent,
    mockSetYears,
    mockSetFilterYear,
    mockSetOnlyMovies
  );

  expect(setFilterResultsArg).toEqual('tv');
  expect(setYearsArg).toEqual([]);
  expect(setFilterYearArg).toEqual('All');
  expect(mockSetOnlyMovies).toHaveBeenCalledTimes(1);
});

it('calls handleFilter correctly for Movies', () => {
  let setFilterResultsArg;
  let setContentArg;
  let setYearsArg;
  let setFilterYearArg;
  const mockSetFilterResults = (arg) => (setFilterResultsArg = arg);
  const mockSetContent = (arg) => (setContentArg = arg);
  const mockSetYears = (arg) => (setYearsArg = arg);
  const mockSetFilterYear = (arg) => (setFilterYearArg = arg);
  const mockSetOnlyMovies = jest.fn();

  const event = { target: { value: 'movies' } };
  handleFilter(
    event,
    content,
    content,
    mockSetFilterResults,
    mockSetContent,
    mockSetYears,
    mockSetFilterYear,
    mockSetOnlyMovies
  );

  expect(setContentArg.length).toBeGreaterThan(1);
  expect(setFilterResultsArg).toEqual('movies');
  expect(setYearsArg).toEqual([
    2019, 2017, 2016, 2014, 2013, 2007, 2005, 2004, 2003, 2001, 1999, 1998,
    1995, 1994, 1993, 1972
  ]);
  expect(setFilterYearArg).toEqual('All');
  expect(mockSetOnlyMovies).toHaveBeenCalledTimes(1);
});

it('calls handleToggleChip correctly', () => {
  const filterGenre = {
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
  };
  let setFilterGenreArg;
  let setShowFiltersArg;
  const mockSetFilterGenre = (arg) => (setFilterGenreArg = arg);
  const mockSetShowFilters = (arg) => (setShowFiltersArg = arg);

  let chip = 'Action';
  handleToggleChip(chip, filterGenre, mockSetFilterGenre, mockSetShowFilters);

  expect(setFilterGenreArg).toEqual({
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
    on: ['Action']
  });

  chip = 'Action';
  handleToggleChip(chip, filterGenre, mockSetFilterGenre, mockSetShowFilters);

  expect(setFilterGenreArg).toEqual({
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
  });
  expect(setShowFiltersArg).toEqual(true);
});

it('calls handleOrder correctly', () => {
  let setFilterOrderArg;
  const mockSetFilterOrder = (arg) => (setFilterOrderArg = arg);

  const event = { target: { value: 'Ascending' } };
  handleOrder(event, mockSetFilterOrder);
  expect(setFilterOrderArg).toEqual('Ascending');

  event.target.value = 'Descending';
  handleOrder(event, mockSetFilterOrder);
  expect(setFilterOrderArg).toEqual('Descending');
});

it('calls goTop correctly', () => {
  scroll.scrollToTop = jest.fn();

  goTop();
  expect(scroll.scrollToTop).toHaveBeenCalledTimes(1);
});

it('snapshot changes when input change', () => {
  const { asFragment } = render(<ConnectedApp />);
  expect(asFragment).toMatchSnapshot();
});
