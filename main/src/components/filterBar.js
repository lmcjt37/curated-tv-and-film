import React from 'react';

export default class Header extends React.Component {

    render() {

        let yearOptions = this.props.years.map((year, index) => (
            <option key={index} value={year}>
                {year}
            </option>
        ));
        
        let genres = [
            "All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
            "History", "Mystery", "Romance", "Sci-Fi", "Thriller", "Horror"
        ];
        let genreOptions = genres.map((genre, index) => (
            <option key={index} value={genre}>
                {genre}
            </option>
        ));

        let alpha = [
            "", "Ascending", "Descending"
        ];
        let alphaOptions = alpha.map((alpha, index) => (
            <option key={index} value={alpha}>
                {alpha}
            </option>
        ));

        return (
            <div className="filter-bar">
                <div className="filter-bar__container">
                    <input
                        type="radio"
                        name="filterResults"
                        value="all"
                        checked={this.props.filterResults === "all"}
                        onChange={this.props.handleFilter}
                    />
                    <label htmlFor="filterAll" className="filter-labels">
                    All
                    </label>
                    <input
                        type="radio"
                        name="filterResults"
                        value="movies"
                        checked={this.props.filterResults === "movies"}
                        onChange={this.props.handleFilter}
                    />
                    <label htmlFor="filterMovies" className="filter-labels">
                    Movies
                    </label>
                    {this.props.filterResults === "movies" ? (
                    <select
                        value={this.props.filterYear}
                        onChange={this.props.handleYear}
                        className="filter-year"
                    >
                        <option disabled value="">
                        - Year -
                        </option>
                        {yearOptions}
                    </select>
                    ) : null}
                    <input
                        type="radio"
                        name="filterResults"
                        value="tv"
                        checked={this.props.filterResults === "tv"}
                        onChange={this.props.handleFilter}
                    />
                    <label htmlFor="filterTV" className="filter-labels">
                    TV Series
                    </label>
                    <label htmlFor="filterGenre" className="filter-labels">
                    Genre
                    </label>
                    <select
                        type="select"
                        name="filterGenre"
                        selected={this.props.filterGenre}
                        onChange={this.props.handleGenre}
                    >
                    {genreOptions}
                    </select>
                    <label htmlFor="filterAlpha" className="filter-labels">
                    Alphabetical Order
                    </label>
                    <select
                        type="select"
                        name="filterAlpha"
                        selected={this.props.filterAlpha}
                        onChange={this.props.handleAlpha}
                    >
                    {alphaOptions}
                    </select>
                </div>
            </div>
        )
    }
}