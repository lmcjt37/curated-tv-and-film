// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  card: {
    margin: theme.spacing(2),
    position: 'relative'
  },
  media: {
    height: 320,
    filter: `contrast(0.8)`
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden'
  },
  chips: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(1)
  },
  actions: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  fab: {
    margin: theme.spacing(1)
  },
  playCircleOutlineIcon: {
    marginRight: theme.spacing(1)
  },
  localPlayIcon: {
    marginRight: theme.spacing(1)
  },
  title: {
    color: '#fff'
  },
  subtitle: {
    color: '#ecf0f1'
  },
  body: {
    color: '#ecf0f1'
  }
});

const Tile = ({
  classes,
  thumbnail,
  title,
  genre,
  year,
  type,
  episode_title,
  season,
  episode,
  short,
  imdb,
  url
}) => {
  return (
    <Card data-testid="tile" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + thumbnail}
        title={title}
      />
      <CardContent className={classes.content}>
        <div className={classes.chips}>
          {genre.map((genre, idx) => {
            return (
              <Chip
                key={idx}
                label={genre}
                className={classes.chip}
                color="secondary"
              />
            );
          })}
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h4"
          component="h1"
        >
          {title} {year ? ' (' + year + ')' : ''}
        </Typography>
        {type === 'tv_show' && (
          <div>
            <Typography
              className={classes.subtitle}
              gutterBottom
              variant="subtitle1"
              component="h3"
            >
              {episode_title} S{season} | E{episode}
            </Typography>
          </div>
        )}
        <Typography className={classes.body} component="p">
          {short}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <Fab
          color="primary"
          aria-label="IMDB"
          className={classes.fab}
          href={imdb}
          target="_blank"
          rel="noopener noreferrer"
          variant="extended"
        >
          <LocalPlayIcon className={classes.localPlayIcon} />
          IMDB
        </Fab>
        <Fab
          color="primary"
          aria-label="Watch"
          className={classes.fab}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="extended"
        >
          <PlayCircleOutlineIcon className={classes.playCircleOutlineIcon} />
          Watch
        </Fab>
      </CardActions>
    </Card>
  );
};

Tile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tile);
