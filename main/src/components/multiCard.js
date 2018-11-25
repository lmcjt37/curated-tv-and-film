import React from 'react';

export default item => {
  return (
    <div className="item-card-multi">
      <div className="item-header">
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
      </div>
      {item.content.map((row, index) => {
        return (
          <div
            className={`item-card__row ${index === 0 ? '' : 'item-card__hr'}`}
            key={index}
          >
            <div className="item-thumbnail">
              <a target="_blank" rel="noopener noreferrer" href={row.url}>
                <img
                  src={row.thumbnail}
                  alt={row.title}
                  className="item-image"
                />
              </a>
            </div>
            <div className="item-info">
              {item.type === 'tv_show' && (
                <div className="tvshow-details">
                  <div className="details__item">
                    <span>Season:</span> {row.season}
                  </div>
                  <div className="details__item">
                    <span>Episode:</span> {row.episode}
                  </div>
                  <div className="details__item">
                    <span>Episode Title:</span> {row.episode_title}
                  </div>
                </div>
              )}
              <div className="item-desc details__item">
                <span>Description:</span> {row.description}
              </div>
              <div className="item-imdb">
                <span>IMDB:</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={row.imdb}
                  className="item-link"
                >
                  {row.imdb}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
