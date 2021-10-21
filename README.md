<p align="center">
  <a href="https://lmcjt37.github.io/curated-tv-and-film/" rel="noopener">
 <img width=200px height=200px src="./public/assets/images/logo.png"></a>
</p>

<h2 align="center">curated-tv-and-film</h2>
<br>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/lmcjt37/curated-tv-and-film/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/lmcjt37/curated-tv-and-film/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
![github-actions](https://github.com/lmcjt37/curated-tv-and-film/actions/workflows/ci.yml/badge.svg?branch=main) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lmcjt37/curated-tv-and-film/issues)

</div>

---

<p align="center"> 
The purpose of the project is to show a curated list of Modern TV shows or Films, where iconic scenes that include speeches, action scenes, classic quotes, etc.
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tests](#tests)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
The purpose of the project is to show a curated list of Modern TV shows or Films, where iconic scenes that include speeches, action scenes, classic quotes, etc. These can all be viewed easily and quickly to help in reference. Especially useful in arguments.

These scenes are carefully picked out moments, ignoring bias of any opinions or beliefs. So please be aware that because of this, certain links may cause offense.
<br>
## 🏁 Getting Started <a name = "getting_started"></a>
To get Started clone this repository or Frok it.
To clone follow this command
```sh
git clone https://github.com/lmcjt37/curated-tv-and-film.git
``` 

## 🔧 Running the tests <a name = "tests"></a>

### Jest

Tests are found in `./src/__tests__` and to run tests across the project use the following command:

```bash
npm test (yarn test)
```

_Tests are also run on a pre-commit hook to make sure tests are updated along with commits and don't break the build._

To know more about testing go to [MORE](MORE.md)

### Snapshots

Along with the Jest tests are snapshots. These are essentially for UI testing how your components are rendered. Any unexpected changes to your components will cause the snapshot tests to fail.

Provided that the components have been rendered correctly, you can fix and update the snapshot tests by pressing 'u' whilst the watch mode is being run. This will then update and re-run the tests to show you the passing state of your tests.

## Prettier linting

The JavaScript files can be prettyfied using [Prettier](https://github.com/prettier/prettier) with the following command:

```bash
npm run lint (yarn run lint)
```

Configuration for Prettier is found in [.prettierrc](.prettierrc).

The project also has pre-commit hooks for when code is commited to your local branches that will trigger this linting across the project.

## 🎈 Usage <a name="usage"></a>

After installing this repository to your local machine to Start the local development server by running the following commands
```sh
$ npm install 
$ npm start
```
The webpage will open automatically, otherwise navigate to http://localhost:3000/ in your browser.

_Hot Module reload causes the server to automatically detect file changes and reload the project._


## 🚀 Deployment <a name = "deployment"></a>

This site is deployed at GitHub Pages - https://lmcjt37.github.io/curated-tv-and-film/

## ⛏️ Built Using <a name = "built_using"></a>

- [HTML](https://www.w3schools.com/html/) - Structural Language
- [CSS](https://www.w3schools.com/css/) - Styling Language
- [JavaScript](https://www.w3schools.com/js/) - Programming Language
- [React](https://reactjs.org/) - Frontend Framework
- [Material UI](https://mui.com/) - React UI Library
- [Lodash](https://lodash.com/) - JavaScript Library
- [Jest](https://jestjs.io/) - Testing Library

## ✍️ Authors <a name = "authors"></a>

- [@lmcjt37](https://github.com/lmcjt37)

Visit here for contributors list - [Contributors](CONTRIBUTORS.md)

## Contribution

Feel free to contribute by reading the guidelines - [Contributing](CONTRIBUTING.md)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

This site is built with a number of tools, the main one being [Create React App](https://facebook.github.io/create-react-app/).

It is themed with [Material UI](https://material-ui.com/), React components that implement Google's Material Design.

Images are sourced via search engines and are not owned by this site.

This site is not endorsed by or affiliated with [IMDB](https://www.imdb.com/).

Further help in running the project [here](MORE.md)
