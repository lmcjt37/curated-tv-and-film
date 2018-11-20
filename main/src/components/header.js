import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <div className="logo-container" onClick={this.props.goTop}>
          <img
            src="./assets/logo-128.png"
            alt="Curated TV and Film logo"
            className="logo-image"
          />
          <div className="logo-title">Curated TV and Film</div>
        </div>
        <div className="content-search">
          <input
            type="text"
            className="form-control"
            onChange={this.props.handleChange}
            placeholder="Search here"
          />
        </div>
        <div className="filter-div">
          {this.props.showFilters ? (
            <span className="close-button" onClick={this.props.toggleFilter}>
              <FontAwesomeIcon icon={faTimesCircle} />
                    </span>) : (
            <span className="filter-button" onClick={this.props.toggleFilter}>
              <FontAwesomeIcon icon={faFilter} />
            </span>
          )}
        </div>
      </div>
        )
  }
}
