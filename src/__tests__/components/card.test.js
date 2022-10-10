import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../../components/card';

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
  render(<Card {...itemMock} />);

  expect(screen.getByTestId('card')).toBeTruthy();
  expect(screen.getByTestId('card-media')).toBeTruthy();
  expect(screen.getByTestId('card-image')).toBeTruthy();
  expect(screen.getByTestId('card-content')).toBeTruthy();
  expect(screen.getByTestId('card-content-title')).toBeTruthy();
  expect(screen.getByTestId('card-content-subtitle-1')).toBeTruthy();
  expect(screen.getByTestId('card-content-subtitle-2')).toBeTruthy();
  expect(screen.getByTestId('card-content-chip-container')).toBeTruthy();
  expect(
    screen.getAllByTestId('card-content-chip-container-item').length
  ).toEqual(3);
  expect(screen.getByTestId('card-content-description')).toBeTruthy();
  expect(screen.getByTestId('card-content-actions')).toBeTruthy();
  expect(screen.getByTestId('card-action-imdb')).toBeTruthy();
  expect(screen.getByTestId('card-action-watch')).toBeTruthy();
});

it('snapshot of initial component', () => {
  const { asFragment } = render(<Card {...itemMock} />);
  expect(asFragment).toMatchSnapshot();
});
