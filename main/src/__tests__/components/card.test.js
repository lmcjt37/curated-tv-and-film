import Card from '../../components/card';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';

const itemMock = {
  type: 'tv_show',
  title: 'Mock of Thrones',
  description: 'You know nothing',
  season: 1,
  episode: 1,
  episode_title: 'To kill a mockingbird',
  imdb: 'https://www.lmcjt.com',
  url: 'https://www.lmcjt.com',
  thumbnail: './assets/images/game-of-thrones.jpg',
  genre: ['Action', 'Adventure', 'Drama']
};

it('render all initial child components', () => {
  const wrapper = mount(<Card {...itemMock} />);

  expect(wrapper.find(MuiCard)).toHaveLength(1);
  expect(wrapper.find(CardActions)).toHaveLength(1);
  expect(wrapper.find(CardContent)).toHaveLength(1);
  expect(wrapper.find(CardMedia)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(4);
  expect(wrapper.find(Chip)).toHaveLength(3);
  expect(wrapper.find(CardActions)).toHaveLength(1);
  expect(wrapper.find(Fab)).toHaveLength(2);
  expect(wrapper.find(LocalPlayIcon)).toHaveLength(1);
  expect(wrapper.find(PlayCircleOutlineIcon)).toHaveLength(1);
});

it('snapshot of initial component', () => {
  const component = render(<Card {...itemMock} />);
  expect(component).toMatchSnapshot();
});
