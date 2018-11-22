[![CircleCI](https://circleci.com/gh/lmcjt37/curated-tv-and-film.svg?style=svg)](https://circleci.com/gh/lmcjt37/curated-tv-and-film) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lmcjt37/curated-tv-and-film/issues)

# Curated-TV-and-Film

The purpose of the project is to show a curated list of Modern TV shows or Films, where iconic scenes that include speeches, action scenes, classic quotes, etc. These can all be viewed easily and quickly to help in reference. Especially useful in arguments.

These scenes are carefully picked out moments, ignoring bias of any opinions or beliefs. So please be aware that because of this, certain links may cause offense.

## Features

* React and Javascript(built with Create-React-App).
* Development server with Hot module reload.
* Jest testing with snapshot testing.

## Local Installation

### Dependencies

* [node.js](https://nodejs.org)

```
git clone https://github.com/lmcjt37/curated-tv-and-film.git
npm install
```

### Development

Make sure you are in the `./main` directory.

Start the local development server by running

```
npm start
```

The webpage will open automatically, otherwise navigate to http://localhost:3000/ in your browser.

_Hot Module reload causes the server to automatically detect file changes and reload the project._

## Project structure

The boilerplate structure is the same as what is created in Create-React-App, but the working directory for the project lives inside `./main`

```
./main
|
├── public/
│   ├── assets/ - Other assets, thumbnail images.
│   ├── index.html - Defines root html for app.
│   └── manifest.json - Tells the browser about your web application and how it should behave when 'installed'.
|
├── src/
│   ├── _tests_/ - Contains test environment (Jest + Enzyme).
│   ├── assets/ - Other assets, icons.
│   ├── fonts/ - Font files.
│   ├── App.js - Core app functionality.
│   ├── App.css - Styling.
│   ├── content.js - Contains the data for tv shows and films for the project.
│   ├── index.js - Project entry point.
│   ├── index.css - Styling.
│   └── serviceWorker.js - (not registered) Defines registration for PWA usage.
|
└── package.json - Defines dependencies and package scripts for project, plus project information.
```

## Prettier linting

The JavaScript files can be prettyfied using [Prettier](https://github.com/prettier/prettier) with the following command:

``` bash
npm run lint (yarn run lint)
```

Configuration for Prettier is found in [.prettierrc](./main/.prettierrc).

The project also has pre-commit hooks for when code is commited to your local branches that will trigger this linting across the project.

## Testing

### Jest

Tests are found in `./main/src/__tests__` and to run tests across the project use the following command:

``` bash
npm test (yarn test)
```

This will start the tests with watch mode active, meaning it will automatically detect file changes and re-test. Initially it will only test files which have changed, to test all files you will be prompted to press 'a'.

You can navigate the command prompt by pressing 'w', which will present you with the available commands.

## Snapshots

Along with the Jest tests are snapshots. These are essentially for UI testing how your components are rendered. Any unexpected changes to your components will cause the snapshot tests to fail.

Provided that the components have been rendered correctly, you can fix and update the snapshot tests by pressing 'u' whilst the watch mode is being run. This will then update and re-run the tests to show you the passing state of your tests.

_Tests are also run on a pre-commit hook to make sure tests are updated along with commits and don't break the build._

## Contribution
Feel free to contribute by reading the guidelines - [Contributing](CONTRIBUTING.md)

## Contributors
Visit here for contributors list - [Contributors](CONTRIBUTORS.md)
