[![CircleCI](https://circleci.com/gh/lmcjt37/curated-tv-and-film.svg?style=svg)](https://circleci.com/gh/lmcjt37/curated-tv-and-film)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lmcjt37/curated-tv-and-film/issues)

# Curated-TV-and-Film

The purpose of the project is to show a curated list of Modern TV shows or Films, where iconic scenes that include speeches, action scenes, classic quotes, etc. These can all be viewed easily and quickly to help in reference. Especially useful in arguments.

These scenes are carefully picked out moments, ignoring bias of any opinions or beliefs. So please be aware that because of this, certain links may cause offense.

## Features

* React and js
* Stylesheets can be CSS, Grid, Flex, bootstrap.
* Embedded resources like images or fonts use DataUrls if appropriate.
* Development
  * Development server
  * Optionally Hot Module Replacement development server (LiveReload for Stylesheets and React components enabled)

## Local Installation

### Dependencies

* [node.js](https://nodejs.org)

```
git clone https://github.com/lmcjt37/curated-tv-and-film.git
npm install
```

### Development server

Start the local development server by running

```
npm start
```

Then open this url in your browser if it doesn't open automatically.
http://localhost:3000/

_It automatically recompiles and refreshes the page when files are changed._

## Project structure

The boilerplate structure and files are the same as this repo minus the bin folder, everything else is exactly the same.

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
cd main && npm run lint (yarn run lint)
```

Configuration for Prettier is found in [.prettierrc](./main/.prettierrc).

## Contribution
Feel free to contribute by reading the guidelines - [Contributing](CONTRIBUTING.md)

## Contributors
Visit here for contributors list - [Contributors](CONTRIBUTORS.md)
