import App from '../App';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import FilterBar from '../components/filterBar.js';
import Card from '../components/card.js';
import MultiCard from '../components/multiCard';
import ErrorIcon from '@material-ui/icons/Error';

import { animateScroll as scroll } from 'react-scroll';

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

xit('calls handleChange correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('search')).toBeFalsy();
  expect(wrapper.state('autoComplete')).toEqual([]);
  expect(wrapper.state('content').length).toBeGreaterThan(1);

  wrapper.instance().handleChange({
    target: {
      value: 'neverToEqualATitle123'
    }
  });

  expect(wrapper.state('search')).toBeTruthy();
  expect(wrapper.state('autoComplete')).toEqual([]);
  expect(wrapper.state('content').length).toEqual(0);
});

xit('calls handleYear correctly', () => {
  const wrapper = mount(<App testing={true} testType="handleYear" />);

  expect(wrapper.find('input[id="filterYear"]').props().value).toBe('All');

  wrapper
    .find('input[id="filterYear"]')
    .simulate('change', { target: { value: '2016' } }); // doesnt work for some reason

  expect(wrapper.find('input[id="filterYear"]').props().value).toBe('2016');

  // const wrapper = shallow(<App />).dive();

  // expect(wrapper.state('filterYear')).toEqual('All');

  // let allContentLength = wrapper.state('content').length;
  // expect(allContentLength).toBeGreaterThan(1);

  // wrapper.instance().handleYear({
  //   target: {
  //     value: '2018'
  //   }
  // });

  // expect(wrapper.state('filterYear')).toEqual('2018');
  // expect(wrapper.state('content').length).toBeLessThan(allContentLength);
});

xit('calls handleFilter correctly for TV', () => {
  const wrapper = shallow(<App />).dive();

  const allContentLength = wrapper.state('content').length;

  expect(allContentLength).toBeGreaterThan(1);
  expect(wrapper.state('filterResults')).toEqual('all');
  expect(wrapper.state('years')).toEqual([]);
  expect(wrapper.state('filterYear')).toEqual('All');

  wrapper.instance().handleFilter({
    target: {
      value: 'tv'
    }
  });

  expect(wrapper.state('filterResults')).toEqual('tv');
  expect(wrapper.state('years')).toEqual([]);
  expect(wrapper.state('filterYear')).toEqual('All');

  const cardCount = wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCount).toBeLessThan(allContentLength);
});

xit('calls handleFilter correctly for Movies', () => {
  const wrapper = shallow(<App />).dive();

  const allContentLength = wrapper.state('content').length;

  expect(allContentLength).toBeGreaterThan(1);
  expect(wrapper.state('filterResults')).toEqual('all');
  expect(wrapper.state('years')).toEqual([]);
  expect(wrapper.state('filterYear')).toEqual('All');

  wrapper.instance().handleFilter({
    target: {
      value: 'movies'
    }
  });

  expect(wrapper.state('filterResults')).toEqual('movies');
  expect(wrapper.state('years')).toEqual([
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
  expect(wrapper.state('filterYear')).toEqual('All');

  const cardCount = wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCount).toBeLessThan(allContentLength);
});

xit('calls handleToggleChip correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('filterGenre')).toEqual({
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

  let allContentLength = wrapper.state('content').length;
  expect(allContentLength).toBeGreaterThan(1);

  wrapper.instance().handleToggleChip('Action');

  expect(wrapper.state('filterGenre')).toEqual({
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

  const cardCount = wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCount).toBeLessThan(allContentLength);

  wrapper.instance().handleToggleChip('Action');

  expect(wrapper.state('filterGenre')).toEqual({
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

  const cardCountTwo =
    wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCountTwo).toEqual(allContentLength);
});

xit('calls handleOrder correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('filterOrder')).toEqual('Ascending');

  let allContentLength = wrapper.state('content').length;
  expect(allContentLength).toBeGreaterThan(1);

  wrapper.instance().handleOrder({
    target: {
      value: 'Descending'
    }
  });

  expect(wrapper.state('filterOrder')).toEqual('Descending');

  const cardCount = wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCount).toEqual(allContentLength);
});

xit('calls toggleFilter correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('showFilters')).toBeFalsy();

  wrapper.instance().toggleFilter();

  expect(wrapper.state('showFilters')).toBeTruthy();
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
