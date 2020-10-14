import FilterBar from '../../components/filterBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';

const mockFunction = jest.fn();

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

  const wrapper = mount(<FilterBar {...state} handleFilter={mockFunction} />);

  expect(wrapper.find(AppBar)).toHaveLength(1);
  expect(wrapper.find(Toolbar)).toHaveLength(1);
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find(MenuItem)).toHaveLength(0); //TODO - No menu items being rendered?
  expect(wrapper.find(FormControl)).toHaveLength(2);
  expect(wrapper.find(FormLabel)).toHaveLength(2);
  expect(wrapper.find(FormControlLabel)).toHaveLength(3);
  expect(wrapper.find(Radio)).toHaveLength(3);
  expect(wrapper.find(RadioGroup)).toHaveLength(1);
  expect(wrapper.find(InputLabel)).toHaveLength(1);
  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Collapse)).toHaveLength(1);
  expect(wrapper.find('#chipContainer_testOnly')).toHaveLength(1);
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

  const wrapper = mount(<FilterBar {...state} handleFilter={mockFunction} />);

  expect(wrapper.find(AppBar)).toHaveLength(1);
  expect(wrapper.find(Toolbar)).toHaveLength(1);
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find(MenuItem)).toHaveLength(0); //TODO - No menu items being rendered?
  expect(wrapper.find(FormControl)).toHaveLength(3);
  expect(wrapper.find(FormLabel)).toHaveLength(3);
  expect(wrapper.find(FormControlLabel)).toHaveLength(3);
  expect(wrapper.find(Radio)).toHaveLength(3);
  expect(wrapper.find(RadioGroup)).toHaveLength(1);
  expect(wrapper.find(InputLabel)).toHaveLength(2);
  expect(wrapper.find(Select)).toHaveLength(2);
  expect(wrapper.find(Collapse)).toHaveLength(1);
  expect(wrapper.find('#chipContainer_testOnly')).toHaveLength(1);
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

  const component = render(
    <FilterBar {...state} handleFilter={mockFunction} />
  );
  expect(component).toMatchSnapshot();
});
