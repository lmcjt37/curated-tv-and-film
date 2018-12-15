import MultiCard from '../../components/multiCard';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';

const itemMockOne = {
  type: 'tv_show',
  title: 'The Walking Dead',
  genre: ['Drama', 'Horror', 'Action'],
  content: [
    {
      description:
        'Following on from where Rick Grimes wakes up from a coma and tries to find his family. He gets to Atlanta, surrounded by walkers, he is thrown from his horse and ends up in a tank. This is where someone on the walkie talkie, Glenn, helps him out of the tight situation.',
      season: 1,
      episode: 2,
      episode_title: 'Guts',
      imdb: 'https://www.imdb.com/title/tt1628064/?ref_=ttep_ep2',
      url: 'https://www.youtube.com/watch?v=ZxmWhlidAZ8',
      thumbnail: './assets/images/walking-dead.jpg'
    }
  ]
};

const itemMockTwo = {
  type: 'tv_show',
  title: 'The Walking Dead',
  genre: ['Drama', 'Horror', 'Action'],
  content: [
    {
      description:
        'Following on from where Rick Grimes wakes up from a coma and tries to find his family. He gets to Atlanta, surrounded by walkers, he is thrown from his horse and ends up in a tank. This is where someone on the walkie talkie, Glenn, helps him out of the tight situation.',
      season: 1,
      episode: 2,
      episode_title: 'Guts',
      imdb: 'https://www.imdb.com/title/tt1628064/?ref_=ttep_ep2',
      url: 'https://www.youtube.com/watch?v=ZxmWhlidAZ8',
      thumbnail: './assets/images/walking-dead.jpg'
    },
    {
      description:
        'The Saviours have captured Rick and the group. They kneel at the mercy of Negan who makes an example of 2 of the groups members. Not for the faint of heart.',
      season: 7,
      episode: 1,
      episode_title: "The Day Will Come When You Won't Be",
      imdb: 'https://www.imdb.com/title/tt5164772/?ref_=ttep_ep1',
      url: 'https://www.youtube.com/watch?v=d3LDG5CCOPQ',
      thumbnail: './assets/images/walking-dead.jpg'
    }
  ]
};

it('render all initial child components with one items', () => {
  const wrapper = mount(<MultiCard {...itemMockOne} />);

  expect(wrapper.find(Card)).toHaveLength(1);
  expect(wrapper.find(CardHeader)).toHaveLength(1);
  expect(wrapper.find(CardContent)).toHaveLength(2);
  expect(wrapper.find(CardMedia)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(4);
  expect(wrapper.find(Chip)).toHaveLength(3);
  expect(wrapper.find(CardActions)).toHaveLength(1);
  expect(wrapper.find(Fab)).toHaveLength(2);
  expect(wrapper.find(LocalPlayIcon)).toHaveLength(1);
  expect(wrapper.find(PlayCircleOutlineIcon)).toHaveLength(1);
});

it('render all initial child components with two items', () => {
  const wrapper = mount(<MultiCard {...itemMockTwo} />);

  expect(wrapper.find(Card)).toHaveLength(1);
  expect(wrapper.find(CardHeader)).toHaveLength(1);
  expect(wrapper.find(CardContent)).toHaveLength(3);
  expect(wrapper.find(CardMedia)).toHaveLength(2);
  expect(wrapper.find(Typography)).toHaveLength(7);
  expect(wrapper.find(Chip)).toHaveLength(3);
  expect(wrapper.find(CardActions)).toHaveLength(2);
  expect(wrapper.find(Fab)).toHaveLength(4);
  expect(wrapper.find(LocalPlayIcon)).toHaveLength(2);
  expect(wrapper.find(PlayCircleOutlineIcon)).toHaveLength(2);
});

it('snapshot of initial component with multiple items', () => {
  const component = render(<MultiCard {...itemMockTwo} />);
  expect(component).toMatchSnapshot();
});
