// React
import React, { useState, useEffect } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

// Components
import './App.css';
import content from './content.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import FilterBar from './components/filterBar.js';
import Card from './components/card.js';
import MultiCard from './components/multiCard';
import Tile from './components/tile';

// Material UI - Core
import Grid from '@material-ui/core/Grid';

// Material UI
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

let data = content;

const styles = theme => ({
  content: {
    marginTop: `${theme.spacing(2) + 54}px`,
    [theme.breakpoints.up('sm')]: {
      marginTop: `${theme.spacing(2) + 64}px`
    }
  },
  error: {
    textAlign: 'center',
    width: '100%',
    margin: '200px auto'
  }
});

const App = ({ classes, testing = false, testType = null }) => {
  const [search, setSearch] = useState(false);
  const [content, setContent] = useState(data);
  const [showFilters, setShowFilters] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [filterResults, setFilterResults] = useState('all');
  const [filterYear, setFilterYear] = useState('All');
  const [filterGenre, setFilterGenre] = useState({
    available: [
      'Action',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Drama',
      'Family',
      'Fantasy',
      'History',
      'Horror',
      'Mystery',
      'Romance',
      'Sci-Fi',
      'Thriller'
    ],
    on: []
  });
  const [filterOrder, setFilterOrder] = useState('Ascending');
  const [onlyMovies, setOnlyMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    //testing code
    if (testing === true) {
      if (testType === 'no data') {
        setContent([]); // testing - 'can't load the data'
      }
      if (testType === 'handleYear') {
        setShowFilters(true);
        setFilterResults('movies');
      }
    }

    //end of testing code
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }, [testing, testType]);

  const handleChange = event => {
    let searchString = event.target.value.trim().toLowerCase();

    if (searchString) {
      let searchResult = data.filter(
        el =>
          el.title.toLowerCase().match(searchString) ||
          (el.year && el.year.toString().match(searchString))
      );

      setAutoComplete(
        data
          .map(el =>
            el.title.toLowerCase().match(searchString)
              ? { label: el.title }
              : null
          )
          .filter(item => item !== null)
      );

      setSearch(true);
      setContent(searchResult);
    } else {
      setSearch(false);
      setContent(data);
      setAutoComplete([]);
    }
  };

  const handleYear = event => {
    let year = event.target.value;
    let moviesFilteredByYear = onlyMovies;
    if (year !== 'All') {
      moviesFilteredByYear = onlyMovies.filter(
        movie => movie.year.toString() === year.toString()
      );
    }
    setFilterYear(year);
    setContent(moviesFilteredByYear);
  };

  const handleFilter = event => {
    setFilterResults(event.target.value);
    setContent(data);
    setYears([]);
    setFilterYear('All');

    if (event.target.value !== 'tv') {
      let filteredMovies = content.filter(value => value.type === 'movie');
      let onlyYears = new Set(filteredMovies.map(movie => movie.year));
      setYears([...onlyYears].sort((a, b) => b - a));
      setOnlyMovies(filteredMovies);
    }
  };

  const handleToggleChip = chip => {
    let abc = filterGenre;
    let _filterGenre = abc;

    let index = _filterGenre.on.indexOf(chip);
    if (index > -1) {
      _filterGenre.on.splice(index, 1);
    } else {
      _filterGenre.on.push(chip);
    }
    setFilterGenre({ ..._filterGenre });
    setShowFilters(true);
  };

  const handleOrder = event => {
    setFilterOrder(event.target.value);
  };

  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  const goTop = () => {
    scroll.scrollToTop();
  };

  let mContent = content;

  return (
    <div>
      <Header
        {...{ showFilters, search, autoComplete, showGrid }}
        handleChange={handleChange}
        goTop={goTop}
        toggleFilter={toggleFilter}
        toggleGrid={toggleGrid}
      />
      <FilterBar
        filterResults={filterResults}
        filterYear={filterYear}
        filterGenre={filterGenre}
        filterOrder={filterOrder}
        years={years}
        showFilters={showFilters}
        handleToggleChip={handleToggleChip}
        handleFilter={handleFilter}
        handleYear={handleYear}
        handleOrder={handleOrder}
      />
      <main className={classes.content}>
        {mContent.length ? (
          <Grid container spacing={1}>
            {filterOrder === 'Ascending' &&
              //sort alphabetically ascending
              mContent
                .sort(function(a, b) {
                  let titleA = a.title.toLowerCase(),
                    titleB = b.title.toLowerCase();
                  if (titleA < titleB) return -1;
                  if (titleA > titleB) return 1;
                  return 0;
                })
                .map(() => {
                  return '';
                })}

            {filterOrder === 'Descending' &&
              //sort alphabetically descending
              mContent
                .sort(function(a, b) {
                  let titleA = a.title.toLowerCase(),
                    titleB = b.title.toLowerCase();
                  if (titleA > titleB) return -1;
                  if (titleA < titleB) return 1;
                  return 0;
                })
                .map(() => {
                  return '';
                })}

            {mContent.map((item, index) => {
              if (filterResults === 'movies' && item.type !== 'movie')
                return null;
              if (filterResults === 'tv' && item.type !== 'tv_show')
                return null;
              if (
                filterGenre.on.length !== 0 &&
                !item.genre.some(genre => filterGenre.on.indexOf(genre) !== -1)
              )
                return null;

              if (showGrid) {
                if (item.content) {
                  return item.content.map((child, idx) => (
                    <Grid key={index * idx} item xs={12} sm={6} md={4}>
                      <Tile {...{ ...item, ...child }} />
                    </Grid>
                  ));
                }

                return (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Tile {...item} />
                  </Grid>
                );
              }

              return (
                <Grid key={index} item xs={12}>
                  {item.content ? <MultiCard {...item} /> : <Card {...item} />}
                </Grid>
              );
            })}
          </Grid>
        ) : search ? (
          <div className={classes.error}>
            <ErrorIcon fontSize="large" />
            <p className={testing ? 'test-no-result' : null}>
              No search result.
            </p>
          </div>
        ) : (
          <div className={classes.error}>
            <ErrorIcon fontSize="large" />
            <p className={testing ? 'test-no-data' : null}>
              Can't load the data.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default withStyles(styles)(App);
