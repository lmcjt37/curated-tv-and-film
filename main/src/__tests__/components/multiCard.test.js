import React from 'react';
import ReactDOM from 'react-dom';

import MultiCard from '../../components/multiCard';

import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const itemMockZero = {
  type: 'tv_show',
  title: 'The Walking Dead',
  genre: ['Drama', 'Horror', 'Action'],
  content: []
};

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

it('renders without crashing, with zero items', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiCard {...itemMockZero} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing, with one item', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiCard {...itemMockOne} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing, with two items', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiCard {...itemMockTwo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component with multiple items', () => {
  let render = createRender();
  const component = render(<MultiCard {...itemMockTwo} />);
  expect(component).toMatchSnapshot();
});
