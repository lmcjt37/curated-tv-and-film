import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/card';
import render  from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of initial component', () => {
    const itemMock = {
		type: "tv_show",
		title: "Mock of Thrones",
		description: "You know nothing",
		season: 1,
		episode: 1,
		episode_title: "To kill a mockingbird",
		imdb: "https://www.lmcjt.com",
		url: "https://www.lmcjt.com",
		thumbnail: "./assets/images/game-of-thrones.jpg",
		genre: ["Action", "Adventure", "Drama"]
    }
    
    const component = render.create(<Card {...itemMock}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
