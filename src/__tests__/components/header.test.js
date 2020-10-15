import Header from '../../components/header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/HighlightOff';
import RowIcon from '@material-ui/icons/ViewStream';
import GridIcon from '@material-ui/icons/ViewModule';
import Autocomplete from '../../components/autocomplete';

it('render all initial child components', () => {
  const wrapper = mount(<Header autoComplete={[]} />);

  expect(wrapper.find(AppBar)).toHaveLength(1);
  expect(wrapper.find(Toolbar)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(1);
  expect(wrapper.find(SearchIcon)).toHaveLength(1);
  expect(wrapper.find(Autocomplete)).toHaveLength(1);
  expect(wrapper.find(IconButton)).toHaveLength(2);
  expect(wrapper.find(TuneIcon)).toHaveLength(1);
});

it('changes icon when showFilters props changes', () => {
  const wrapper = mount(<Header autoComplete={[]} />);

  expect(wrapper.find(CloseIcon)).toHaveLength(0);
  expect(wrapper.find(TuneIcon)).toHaveLength(1);

  wrapper.setProps({ showFilters: true });

  expect(wrapper.find(CloseIcon)).toHaveLength(1);
  expect(wrapper.find(TuneIcon)).toHaveLength(0);
});

it('changes icon when showGrid props changes', () => {
  const wrapper = mount(<Header autoComplete={[]} />);

  expect(wrapper.find(RowIcon)).toHaveLength(0);
  expect(wrapper.find(GridIcon)).toHaveLength(1);

  wrapper.setProps({ showGrid: true });

  expect(wrapper.find(RowIcon)).toHaveLength(1);
  expect(wrapper.find(GridIcon)).toHaveLength(0);
});

it('snapshot of initial component', () => {
  const component = render(<Header autoComplete={[]} />);
  expect(component).toMatchSnapshot();
});
