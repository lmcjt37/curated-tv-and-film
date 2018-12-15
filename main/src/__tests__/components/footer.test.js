import Footer from '../../components/footer';
import Typography from '@material-ui/core/Typography';

it('render all initial child components', () => {
  const wrapper = mount(<Footer />);

  expect(wrapper.find(Footer)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(3);
  expect(wrapper.find('ul')).toHaveLength(1);
  expect(wrapper.find('li')).toHaveLength(3);
  expect(wrapper.find('a')).toHaveLength(3);
});

it('snapshot of initial component', () => {
  const component = render(<Footer />);
  expect(component).toMatchSnapshot();
});
