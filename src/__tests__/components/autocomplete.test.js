import Autocomplete from '../../components/autocomplete';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

it('render all initial child components, where isOpen is false', () => {
  const wrapper = mount(<Autocomplete />);

  expect(wrapper.find(Downshift)).toHaveLength(1);
  expect(wrapper.find(Paper)).toHaveLength(0);
  expect(wrapper.find(MenuItem)).toHaveLength(0);
  expect(wrapper.find(InputBase)).toHaveLength(1);
});

xit('render all initial child components, where isOpen is true', () => {
  const wrapper = shallow(<Autocomplete />).dive();

  expect(wrapper.find(Downshift)).toHaveLength(1);
  expect(wrapper.find(Paper)).toHaveLength(0);
  expect(wrapper.find(MenuItem)).toHaveLength(0);
  expect(wrapper.find(InputBase)).toHaveLength(0);
});

//TODO - Tests functions

it('snapshot of initial component', () => {
  const component = render(<Autocomplete />);
  expect(component).toMatchSnapshot();
});
