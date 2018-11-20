import React, { Component } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

import './App.css';
import content from './content.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import FilterBar from './components/filterBar.js';
import Card from './components/card.js';

var data = content;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      content: data,
      showFilters: false,
      filterResults: 'all',
      filterYear: '',
      filterGenre: "All",
      filterAlpha: "",
      onlyMovies: [],
      years: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleAlpha = this.handleAlpha.bind(this);
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
      this.setState({ search: true });
      this.setState({ content: searchResult });
    } else {
      this.setState({ search: false });
      this.setState({ content: data });
    }
  };

  handleYear = event => {
    let year = event.target.value;
    let moviesFilteredByYear = this.state.onlyMovies.filter(
      movie => movie.year.toString() === year
    );

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
      filterYear: ''
    });

    if (!this.state.filterTV) {
      let filteredMovide = this.state.content.filter(
        value => value.type === 'movie'
      );
      let onlyYears = new Set(filteredMovide.map(movie => movie.year));
      let years = [...onlyYears].sort((a, b) => b - a);

      this.setState({
        onlyMovies: filteredMovide,
        years
      });
    }
  };

  handleGenre = event => {
    this.setState({ filterGenre: event.target.value });
  };

  handleAlpha = event => {
    this.setState({ filterAlpha: event.target.value })
  }

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
      filterAlpha,
      years,
      content as mContent
    } = this.state;

    return (
      <div className="main-container">
        <Header
          {...{ showFilters, search }}
          handleChange={this.handleChange}
          goTop={this.goTop}
          toggleFilter={this.toggleFilter}
        />
        {this.state.showFilters ? (
          <FilterBar
            {...{ filterResults, filterYear, filterGenre, years }}
            handleGenre={this.handleGenre}
            handleFilter={this.handleFilter}
            handleYear={this.handleYear}
            handleAlpha={this.handleAlpha}
          />
        ) : null}
        <section className="app container">
          <main className="main-content">
            <div className="content-list">
              {mContent.length ? (
                <ul>
                  
                  { this.state.filterAlpha === "Ascending" &&
                    //sort alphabetically ascending
                    mContent.sort(function(a, b){
	                    var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
                        if (titleA < titleB)
                          return -1 
                        if (titleA > titleB)
                          return 1
                      return 0
                    }).map(() => {
                      return '';

                    })}

                    { this.state.filterAlpha === "Descending" &&
                    //sort alphabetically descending
                    mContent.sort(function(a, b){
	                    var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
                        if (titleA > titleB)
                          return -1 
                        if (titleA < titleB)
                          return 1
                      return 0
                    }).map(() => {
                      return '';

                    })}

                  {mContent.map((item, index) => {
                    if (
                      this.state.filterResults === 'movies' &&
                      item.type !== 'movie'
                    )
                      return '';
                    if (
                      this.state.filterResults === 'tv' &&
                      item.type !== 'tv_show'
                    )
                      return '';
                    if (
                      this.state.filterGenre !== 'All' &&
                      !item.genre.some(
                        genre => genre === this.state.filterGenre
                      )
                    )
                      return '';

                    return (
                      <li key={index}>
                        <Card {...item} />
                      </li>
                    );
                  })}
                  
                </ul>
              ) : this.state.search ? (
                <p>No search result</p>
              ) : (
                <p>Can't load the data.</p>
              )}
            </div>
          </main>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
