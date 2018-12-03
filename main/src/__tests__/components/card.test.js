import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../../components/card';

import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  let render = createRender();
  const component = render(<Card {...itemMock} />);
  expect(component).toMatchSnapshot();
});
