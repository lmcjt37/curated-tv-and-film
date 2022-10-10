import React from 'react';
import { render, screen } from '@testing-library/react';

import MultiCard from '../../components/multiCard';

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
  render(<MultiCard {...itemMockOne} />);

  expect(screen.getByTestId('multi-card')).toBeTruthy();
  expect(screen.getByTestId('multi-card-title')).toBeTruthy();
  expect(screen.getByTestId('multi-card-chip-container')).toBeTruthy();
  expect(
    screen.getAllByTestId('multi-card-chip-container-item').length
  ).toEqual(3);

  expect(screen.getAllByTestId('multi-card-item').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-media').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-image').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-content').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-subtitle-1').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-subtitle-2').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-description').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-actions').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-action-imdb').length).toEqual(1);
  expect(screen.getAllByTestId('multi-card-action-watch').length).toEqual(1);
});

it('render all initial child components with two items', () => {
  render(<MultiCard {...itemMockTwo} />);

  expect(screen.getByTestId('multi-card')).toBeTruthy();
  expect(screen.getByTestId('multi-card-title')).toBeTruthy();
  expect(screen.getByTestId('multi-card-chip-container')).toBeTruthy();
  expect(
    screen.getAllByTestId('multi-card-chip-container-item').length
  ).toEqual(3);

  expect(screen.getAllByTestId('multi-card-item').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-media').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-image').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-content').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-subtitle-1').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-subtitle-2').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-description').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-actions').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-action-imdb').length).toEqual(2);
  expect(screen.getAllByTestId('multi-card-action-watch').length).toEqual(2);
});

it('snapshot of initial component with multiple items', () => {
  const { asFragment } = render(<MultiCard {...itemMockTwo} />);
  expect(asFragment).toMatchSnapshot();
});
