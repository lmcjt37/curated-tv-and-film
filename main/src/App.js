import React, { Component } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

import './App.css';
import content from './content.js';
import icons from './assets/icons';

var data = content;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      content: content,
      filterTV: true,
      filterMovies: true,
      filterYear: "",
      onlyMovies: [],
      years: []
    }

    this.handleFilter = this.handleFilter.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }

  handleChange = (event) => {
    var searchString = event.target.value;
    this.setState({ searchString: searchString });

    searchString = searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      var searchResult = this.state.content.filter((el) =>
        el.title.toLowerCase().match(searchString));
      this.setState({ content: searchResult });
    } else {
      this.setState({ content: data });
    }
  }

  handleYear = (event) => {
    let year = event.target.value;
    let moviesFilteredByYear = this.state.onlyMovies.filter(movie => movie.year.toString() === year);

    this.setState({
      filterYear: year,
      content: moviesFilteredByYear
    });
  }

  handleFilter = (event) => {
    this.setState({ 
      [event.target.name] : event.target.checked,
      content: data,
      years: [],
      filterYear: ''
    });

    if (!!this.state.filterTV) {
      let filteredMovide = this.state.content.filter(value => value.type === 'movie');
      let onlyYears = new Set(filteredMovide.map(movie => movie.year));
      let years = [...onlyYears].sort((a, b) => b-a);
      
      this.setState({
        onlyMovies: filteredMovide,
        years
      });
    }
  }

  goTop = (event) => {
    scroll.scrollToTop();
  }

  render() {
    let optionItems = this.state.years.map((year, index) =>
      <option key={index} value={year}>{year}</option>
    );

    return (
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="logoContainer">
            <div className="logoImage" onClick={this.goTop}>Curated TV and Film</div>
          </div>
          <div className="content-filter">
            <input type="text" className="form-control" value={this.state.searchString} onChange={this.handleChange} placeholder="Search here" />
          </div>
          <div className='filter-div'>
              <input type="checkbox" name = "filterMovies" checked={this.state.filterMovies} onChange={this.handleFilter}/><label htmlFor='movies' className="filter-labels">Movies</label>
              {this.state.filterMovies && !this.state.filterTV ? (
                  <select value={this.state.filterYear} onChange={this.handleYear} className="filter-year">
                    <option disabled value="">- Year -</option>
                    {optionItems}
                  </select> 
                ) : (
                  null
                )
              }
              <input type="checkbox" name = "filterTV" checked={this.state.filterTV} onChange={this.handleFilter}/><label htmlFor='tv' className="filter-labels">TV Series</label>
          </div>
        </div>
        <section className="app container">
          <main className="main-content">
            <div className="content-list">
              {this.state.content.length ? (
                <ul>
                  {this.state.content.map((item, index) => {
                    if (this.state.filterMovies === false && item.type === "movie")
                      return "";
                    if (this.state.filterTV === false && item.type === "tv_show")
                      return "";
                    return (
                      <li key={index}>
                        <div className="item-card">
                          <div className="item-thumbnail">
                            <a target="_blank" rel="noopener noreferrer" href={item.url}>
                              <img src={item.thumbnail} alt={item.title} className="item-image" />
                            </a>
                          </div>
                          <div className="item-info">
                            <h2>{item.title}{item.year ? (" (" + item.year + ")") : ''}</h2>
                            {item.type === "tv_show" &&
                              <div className="tvshow-details">
                                <div className="details__item"><span>Season:</span> {item.season}</div>
                                <div className="details__item"><span>Episode:</span> {item.episode}</div>
                                <div className="details__item"><span>Episode Title:</span> {item.episode_title}</div>
                              </div>
                            }
                            <div className="item-desc details__item"><span>Description:</span> {item.description}</div>
                            <div className="item-imdb">
                              <span>IMDB:</span><a target="_blank" rel="noopener noreferrer" href={item.imdb} className="item-link">{item.imdb}</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                this.state.searchString ? (
                  <p>No search result</p>
                ) : (
                  <p>Can't load the data.</p>
                )
              )
            }
          </div>
        </main>
      </section>
      <footer id="footer">
        <div className="container">
          <ul className="links">
            <li>
              <a href="https://github.com/lmcjt37/curated-tv-and-film">
                <img src={icons.github} alt="Repository" />
                <span>Repository</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/lmcjt37/curated-tv-and-film/graphs/contributors">
                <img src={icons.github} alt="Contributors" />
                <span>Contributors</span>
              </a>
            </li>
          </ul>
          <p className="version">v0.0.1</p>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
