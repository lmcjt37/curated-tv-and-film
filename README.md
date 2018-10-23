# Curated-Tv-and-Flim/react-starter

The purpose of the project is to show a curated list of Modern TV shows or Films, where iconic scenes that include speeches, action scenes, classic quotes, etc. These can all be viewed easily and quickly to help in reference. Especially useful in arguments.

These scenes are carefully picked out moments, ignoring bias of any opinions or beliefs. So please be aware that because of this, certain links may cause offense.

## Features

* React and js
* Stylesheets can be CSS, Grid, Flex, bootstrap.
* Embedded resources like images or fonts use DataUrls if appropriate
* Development
  * Development server
  * Optionally Hot Module Replacement development server (LiveReload for Stylesheets and React components enabled)

## Local Installation

Install [node.js](https://nodejs.org)

Just clone this repo and change the `origin` git remote.

``` text
npm install
```

## Development server

``` text
# start the webpack-dev-server
npm start
# wait for the first compilation is successful

# open this url in your browser
http://localhost:30000/
```

It automatically recompiles and refreshes the page when files are changed.

## Project structure

The boilerplate structure and files are the same as this repo minus the bin folder, everything else is exactly the same.

```
*root/main*
|
├── */src/*
│   ├── */_tests_/* contains test environment (Jest + Enzyme)
│   ├── */fonts/* where font and stuff are stored
│   ├── *App.js* main layout
│   ├── *App.css* styling
│   ├── *index.html* entry point
│   ├── *index.js* javascript entry point
│   ├── *content.js* javascript entry point
│   ├── *index.css* styling
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
└── *README.md* this file

```