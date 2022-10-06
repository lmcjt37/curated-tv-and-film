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
    margin: theme.spacing(2)
  },
  innerContainer: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  media: {
    height: 175,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  thumbnail: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      borderRadius: '0.5em',
      display: 'inherit',
      maxWidth: '100%',
      minHeight: '9.375em',
      width: '16.625em',
      objectFit: 'cover',
      margin: theme.spacing(2)
    }
  },
  chips: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  chip: {
    marginRight: theme.spacing(1)
  },
  fab: {
    marginRight: theme.spacing(1)
  },
  playCircleOutlineIcon: {
    marginRight: theme.spacing(1)
  },
  localPlayIcon: {
    marginRight: theme.spacing(1)
  },
  actions: {
    marginTop: theme.spacing(2),
    padding: 0, // override default
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
});

const SingleCard = ({
  classes,
  thumbnail,
  title,
  year,
  type,
  episode_title,
  season,
  episode,
  genre,
  description,
  imdb,
  url
}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.innerContainer}>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + thumbnail}
          title={title}
        />
        <img
          className={classes.thumbnail}
          src={process.env.PUBLIC_URL + thumbnail}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title} {year ? ' (' + year + ')' : ''}
          </Typography>
          {type === 'tv_show' && (
            <div>
              <Typography gutterBottom variant="subtitle1" component="h3">
                {episode_title}
              </Typography>
              <Typography component="p" color="textSecondary">
                Season: {season} | Episode: {episode}
              </Typography>
            </div>
          )}
          <div className={classes.chips}>
            {genre.map((genre, idx) => {
              return <Chip key={idx} label={genre} className={classes.chip} />;
            })}
          </div>
          <Typography component="p">{description}</Typography>
          <CardActions classes={{ root: classes.actions }}>
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
              <PlayCircleOutlineIcon
                className={classes.playCircleOutlineIcon}
              />
              Watch
            </Fab>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

SingleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleCard);
