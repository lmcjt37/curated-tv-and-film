// React
import React from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

// Components
import './App.css';
import content from './content.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import FilterBar from './components/filterBar.js';
import Card from './components/card.js';
import MultiCard from './components/multiCard';

// Material UI
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

var data = content;

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      content: data,
      showFilters: false,
      filterResults: 'all',
      filterYear: 'All',
      filterGenre: {
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
      },
      filterOrder: 'Ascending',
      onlyMovies: [],
      years: [],
      autoComplete: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleToggleChip = this.handleToggleChip.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }

  handleChange = event => {
    var searchString = event.target.value.trim().toLowerCase();

    if (searchString) {
      var searchResult = data.filter(
        el =>
          el.title.toLowerCase().match(searchString) ||
          (el.year && el.year.toString().match(searchString))
      );

      var autoComplete = [];
      autoComplete = data
        .map(el =>
          el.title.toLowerCase().match(searchString)
            ? { label: el.title }
            : null
        )
        .filter(item => item !== null);

      this.setState({
        search: true,
        content: searchResult,
        autoComplete
      });
    } else {
      this.setState({
        search: false,
        content: data,
        autoComplete: []
      });
    }
  };

  handleYear = event => {
    let year = event.target.value;
    let moviesFilteredByYear = this.state.onlyMovies;
    if (year !== 'All') {
      moviesFilteredByYear = this.state.onlyMovies.filter(
        movie => movie.year.toString() === year.toString()
      );
    }
    this.setState({
      filterYear: year,
      content: moviesFilteredByYear
    });
  };

  handleFilter = event => {
    this.setState({
      filterResults: event.target.value,
      content: data,
      years: [],
      filterYear: 'All'
    });

    if (event.target.value !== 'tv') {
      let filteredMovies = this.state.content.filter(
        value => value.type === 'movie'
      );
      let onlyYears = new Set(filteredMovies.map(movie => movie.year));
      let years = [...onlyYears].sort((a, b) => b - a);

      this.setState({
        onlyMovies: filteredMovies,
        years
      });
    }
  };

  handleToggleChip = chip => {
    const { filterGenre } = this.state;
    let index = filterGenre.on.indexOf(chip);

    if (index > -1) {
      filterGenre.on.splice(index, 1);
    } else {
      filterGenre.on.push(chip);
    }
    this.setState({ filterGenre });
  };

  handleOrder = event => {
    this.setState({ filterOrder: event.target.value });
  };

  toggleFilter = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  goTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const {
      showFilters,
      search,
      filterResults,
      filterYear,
      filterGenre,
      filterOrder,
      years,
      autoComplete
    } = this.state;
    var mContent = this.state.content;
    const { classes } = this.props;

    return (
      <div>
        <Header
          {...{ showFilters, search, autoComplete }}
          handleChange={this.handleChange}
          goTop={this.goTop}
          toggleFilter={this.toggleFilter}
        />
        <FilterBar
          {...{
            filterResults,
            filterYear,
            filterGenre,
            filterOrder,
            years,
            showFilters
          }}
          handleToggleChip={this.handleToggleChip}
          handleFilter={this.handleFilter}
          handleYear={this.handleYear}
          handleOrder={this.handleOrder}
        />
        <main className={classes.content}>
          {mContent.length ? (
            <ul>
              {this.state.filterOrder === 'Ascending' &&
                //sort alphabetically ascending
                mContent
                  .sort(function(a, b) {
                    var titleA = a.title.toLowerCase(),
                      titleB = b.title.toLowerCase();
                    if (titleA < titleB) return -1;
                    if (titleA > titleB) return 1;
                    return 0;
                  })
                  .map(() => {
                    return '';
                  })}

              {this.state.filterOrder === 'Descending' &&
                //sort alphabetically descending
                mContent
                  .sort(function(a, b) {
                    var titleA = a.title.toLowerCase(),
                      titleB = b.title.toLowerCase();
                    if (titleA > titleB) return -1;
                    if (titleA < titleB) return 1;
                    return 0;
                  })
                  .map(() => {
                    return '';
                  })}

              {mContent.map((item, index) => {
                if (
                  this.state.filterResults === 'movies' &&
                  item.type !== 'movie'
                )
                  return null;
                if (
                  this.state.filterResults === 'tv' &&
                  item.type !== 'tv_show'
                )
                  return null;
                if (
                  this.state.filterGenre.on.length !== 0 &&
                  !item.genre.some(
                    genre => this.state.filterGenre.on.indexOf(genre) !== -1
                  )
                )
                  return null;

                return (
                  <li key={index}>
                    {item.content ? (
                      <MultiCard {...item} />
                    ) : (
                      <Card {...item} />
                    )}
                  </li>
                );
              })}
            </ul>
          ) : this.state.search ? (
            <div className={classes.error}>
              <ErrorIcon fontSize="large" />
              <p>No search result.</p>
            </div>
          ) : (
            <div className={classes.error}>
              <ErrorIcon fontSize="large" />
              <p>Can't load the data.</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(App);
