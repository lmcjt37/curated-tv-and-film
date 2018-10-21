import React, { Component } from 'react';
import './App.css';
import content from './content.js';

var data = content;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      content: content
    }
  }

  handleChange = (event) => {
    var searchString = event.target.value;
    this.setState({searchString: searchString});

    searchString = searchString.trim().toLowerCase();

    if(searchString.length > 0) {
      var searchResult = this.state.content.filter((el) =>
        el.title.toLowerCase().match(searchString));
      this.setState({content: searchResult});
    } else {
      this.setState({content: data});
    }
  }

  render() {
    return (
      <div className="mainContainer">
          <div className="headerContainer">
          <div className="logoContainer">
            <div className="logoImage">Curated TV and Film</div>
          </div>
          <div className="content-filter">
            <input type="text" className="form-control" value={this.state.searchString} onChange={this.handleChange} placeholder="Search here"/>
          </div>
        </div>
      <section className="app container">
        <main className="main-content">
          <div className="content-list">
            {this.state.content.length ? (
              <ul>
                {this.state.content.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="row">
                        <div className="item-thumbnail">
                          <a target="_blank"  rel="noopener noreferrer" href={item.url}>
                            <img src={item.thumbnail} alt={item.title}/>
                          </a>
                        </div>
                        <div className="item-info">
                          <h2>{item.title}{item.year ? (" (" + item.year + ")") : ''}</h2>
                          {item.type === "tv_show" &&
                            <div className="tvshow-details">
                              <div className="tvshow-details__item"><span>Season:</span> {item.season}</div>
                              <div className="tvshow-details__item"><span>Episode:</span> {item.episode}</div>
                              <div className="tvshow-details__item"><span>Episode Title:</span> {item.episode_title}</div>
                            </div>
                          }
                          <div className="item-imdb">
                            <span>IMDB:</span><a target="_blank"  rel="noopener noreferrer" href={item.imdb}>{item.imdb}</a>
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
      </div>
    );
  }
}

export default App;
