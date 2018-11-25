import React from 'react';
import ReactDOM from 'react-dom';
import MultiCard from '../../components/multiCard';
import render from 'react-test-renderer';

it('renders without crashing', () => {
  const itemMock = {
    type: 'tv_show',
    title: 'The Walking Dead',
    genre: ['Drama', 'Horror', 'Action'],
    content: []
  };
  const div = document.createElement('div');
  ReactDOM.render(<MultiCard {...itemMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  const itemMock = {
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

  const component = render.create(<MultiCard {...itemMock} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
