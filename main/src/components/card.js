import React from 'react';

export default item => {
  return (
    <div className="item-card">
      <div className="item-thumbnail">
        <a target="_blank" rel="noopener noreferrer" href={item.url}>
          <img src={item.thumbnail} alt={item.title} className="item-image" />
        </a>
      </div>
      <div className="item-info">
        <h2>
          {item.title}
          {item.year ? ' (' + item.year + ')' : ''}
        </h2>
        <span className="genre-container">
          <h5 className="genre-title">Genre:</h5>
          <span className="genre-item">
            {item.genre && `${item.genre.join(', ')}`}
          </span>
        </span>
        {item.type === 'tv_show' && (
          <div className="tvshow-details">
            <div className="details__item">
              <span>Season:</span> {item.season}
            </div>
            <div className="details__item">
              <span>Episode:</span> {item.episode}
            </div>
            <div className="details__item">
              <span>Episode Title:</span> {item.episode_title}
            </div>
          </div>
        )}
        <div className="item-desc details__item">
          <span>Description:</span> {item.description}
        </div>
        <div className="item-imdb">
          <span>IMDB:</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.imdb}
            className="item-link"
          >
            {item.imdb}
          </a>
        </div>
      </div>
    </div>
  );
};
