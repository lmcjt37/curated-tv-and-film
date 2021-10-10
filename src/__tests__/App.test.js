import App from '../App';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import FilterBar from '../components/filterBar.js';
import Card from '../components/card.js';
import MultiCard from '../components/multiCard';
import ErrorIcon from '@material-ui/icons/Error';
import { animateScroll as scroll } from 'react-scroll';
import {
  handleYear,
  handleChange,
  handleFilter,
  handleToggleChip,
  handleOrder,
  toggleFilter
} from '../App';
import content from '../content';

it('render all initial child components', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(FilterBar)).toHaveLength(1);
  expect(wrapper.find('main')).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
  expect(wrapper.find(Card).length).toBeGreaterThan(0);
  expect(wrapper.find(MultiCard).length).toBeGreaterThan(0);
  expect(wrapper.find(ErrorIcon)).toHaveLength(0);
});

it('renders error component for no search results', () => {
  const wrapper = mount(<App testing={true} />);

  wrapper.find('input[type="text"]').simulate('change', {
    target: {
      value: 'random text with no search result'
    }
  });

  expect(wrapper.find(ErrorIcon)).toHaveLength(1);
  expect(wrapper.find('.test-no-result').text()).toEqual('No search result.');
});

it("renders error component when it can't load the data", () => {
  const wrapper = mount(<App testing={true} testType="no data" />);

  expect(wrapper.find(ErrorIcon)).toHaveLength(1);

  expect(wrapper.find('.test-no-data').text()).toEqual("Can't load the data.");
});

it('calls handleChange correctly', () => {
  const data = content;
  let setAutoCompleteArg;
  let setSearchArg;
  let setContentArg;
  const mockSetAutoComplete = arg => (setAutoCompleteArg = arg);
  const mockSetSearch = arg => (setSearchArg = arg);
  const mockSetContent = arg => (setContentArg = arg);

  const event = { target: { value: '' } };
  handleChange(event, data, mockSetAutoComplete, mockSetSearch, mockSetContent);

  expect(setSearchArg).toBeFalsy();
  expect(setAutoCompleteArg).toEqual([]);
  expect(setContentArg.length).toBeGreaterThan(1);

  event.target.value = 'neverToEqualATitle123';
  handleChange(event, data, mockSetAutoComplete, mockSetSearch, mockSetContent);

  expect(setSearchArg).toBeTruthy();
  expect(setAutoCompleteArg).toEqual([]);
  expect(setContentArg.length).toEqual(0);
});

it('calls handleYear correctly', () => {
  let onlyMovies = content.filter(value => value.type === 'movie');
  let setContentArg;
  let setFilterArg;
  const mockSetContent = arg => (setContentArg = arg.length);
  const mockSetFilterYear = arg => (setFilterArg = arg);

  const event = { target: { value: 'All' } };
  handleYear(event, onlyMovies, mockSetFilterYear, mockSetContent);
  let allContentLength = setContentArg;

  expect(allContentLength).toBeGreaterThan(1);

  event.target.value = '2003';
  handleYear(event, onlyMovies, mockSetFilterYear, mockSetContent);

  expect(setContentArg).toBeLessThan(allContentLength);
  expect(setFilterArg).toEqual(event.target.value);
});

it('calls handleFilter correctly for TV', () => {
  let data = content;
  let setFilterResultsArg;
  let setContentArg;
  let setYearsArg;
  let setFilterYearArg;
  const mockSetFilterResults = arg => (setFilterResultsArg = arg);
  const mockSetContent = arg => (setContentArg = arg);
  const mockSetYears = arg => (setYearsArg = arg);
  const mockSetFilterYear = arg => (setFilterYearArg = arg);
  const mockSetOnlyMovies = jest.fn();

  const event = { target: { value: 'all' } };
  handleFilter(
    event,
    data,
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
    data,
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
  let data = content;
  let setFilterResultsArg;
  let setContentArg;
  let setYearsArg;
  let setFilterYearArg;
  const mockSetFilterResults = arg => (setFilterResultsArg = arg);
  const mockSetContent = arg => (setContentArg = arg);
  const mockSetYears = arg => (setYearsArg = arg);
  const mockSetFilterYear = arg => (setFilterYearArg = arg);
  const mockSetOnlyMovies = jest.fn();

  const event = { target: { value: 'movies' } };
  handleFilter(
    event,
    data,
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
    2019,
    2017,
    2016,
    2014,
    2013,
    2007,
    2005,
    2004,
    2003,
    2001,
    1999,
    1998,
    1995,
    1994,
    1993,
    1972
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
  const mockSetFilterGenre = arg => (setFilterGenreArg = arg);
  const mockSetShowFilters = arg => (setShowFiltersArg = arg);

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
  const mockSetFilterOrder = arg => (setFilterOrderArg = arg);

  const event = { target: { value: 'Ascending' } };
  handleOrder(event, mockSetFilterOrder);
  expect(setFilterOrderArg).toEqual('Ascending');

  event.target.value = 'Descending';
  handleOrder(event, mockSetFilterOrder);
  expect(setFilterOrderArg).toEqual('Descending');
});

it('calls toggleFilter correctly', () => {
  let setShowFiltersArg;
  const setShowFilters = arg => (setShowFiltersArg = arg);

  let showFilters = true;
  toggleFilter(setShowFilters, showFilters);
  expect(setShowFiltersArg).toBeFalsy();

  showFilters = false;
  toggleFilter(setShowFilters, showFilters);
  expect(setShowFiltersArg).toBeTruthy();
});

xit('calls goTop correctly', () => {
  scroll.scrollToTop = jest.fn();

  const wrapper = shallow(<App />).dive();

  wrapper.instance().goTop();

  expect(scroll.scrollToTop).toHaveBeenCalledTimes(1);
});

it('snapshot changes when input change', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
