import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card {...itemMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
  const component = render(<Card {...itemMock} />);
  expect(component).toMatchSnapshot();
});
