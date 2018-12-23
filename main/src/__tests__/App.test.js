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
  const wrapper = shallow(<App />).dive();

  wrapper.setState({
    search: true,
    content: []
  });

  expect(wrapper.find(ErrorIcon)).toHaveLength(1);
  expect(wrapper.find('p').text()).toEqual('No search result.');
});

it("renders error component when it can't load the data", () => {
  const wrapper = shallow(<App />).dive();

  wrapper.setState({
    search: false,
    content: []
  });

  expect(wrapper.find(ErrorIcon)).toHaveLength(1);
  expect(wrapper.find('p').text()).toEqual("Can't load the data.");
});

it('calls handleChange correctly', () => {
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

it('calls handleYear correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('filterYear')).toEqual('All');

  let allContentLength = wrapper.state('content').length;
  expect(allContentLength).toBeGreaterThan(1);

  wrapper.instance().handleYear({
    target: {
      value: '2018'
    }
  });

  expect(wrapper.state('filterYear')).toEqual('2018');
  expect(wrapper.state('content').length).toBeLessThan(allContentLength);
});

it('calls handleFilter correctly for TV', () => {
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

it('calls handleFilter correctly for Movies', () => {
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
    2017,
    2014,
    2013,
    2007,
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

it('calls handleGenre correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('filterGenre')).toEqual('All');

  let allContentLength = wrapper.state('content').length;
  expect(allContentLength).toBeGreaterThan(1);

  wrapper.instance().handleGenre({
    target: {
      value: 'Action'
    }
  });

  expect(wrapper.state('filterGenre')).toEqual('Action');

  const cardCount = wrapper.find(Card).length + wrapper.find(MultiCard).length;

  expect(cardCount).toBeLessThan(allContentLength);
});

it('calls handleOrder correctly', () => {
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

it('calls toggleFilter correctly', () => {
  const wrapper = shallow(<App />).dive();

  expect(wrapper.state('showFilters')).toBeFalsy();

  wrapper.instance().toggleFilter();

  expect(wrapper.state('showFilters')).toBeTruthy();
});

it('calls goTop correctly', () => {
  scroll.scrollToTop = jest.fn();

  const wrapper = shallow(<App />).dive();

  wrapper.instance().goTop();

  expect(scroll.scrollToTop).toHaveBeenCalledTimes(1);
});

it('snapshot changes when input change', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
