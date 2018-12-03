// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
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
      display: 'inherit',
      maxWidth: '100%',
      height: '9.375em',
      width: '16.625em',
      margin: theme.spacing.unit * 2
    }
  },
  chip: {
    margin: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
  },
  playCircleOutlineIcon: {
    marginRight: theme.spacing.unit
  },
  localPlayIcon: {
    marginRight: theme.spacing.unit
  }
});

function MultiCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title + (props.year ? '(' + props.year + ')' : '')}
      />
      <CardContent>
        {props.genre.map((genre, idx) => {
          return <Chip key={idx} label={genre} className={classes.chip} />;
        })}
      </CardContent>
      {props.content.map((row, index) => {
        return (
          <div key={index} className={classes.innerContainer}>
            <CardMedia
              className={classes.media}
              image={row.thumbnail}
              title={row.title}
            />
            <img
              className={classes.thumbnail}
              src={row.thumbnail}
              alt={row.title}
            />
            <CardContent>
              <div className={classes.details}>
                {props.type === 'tv_show' && (
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {row.episode_title}
                    </Typography>
                    <Typography component="p">
                      Season: {row.season} | Episode: {row.episode}
                    </Typography>
                  </div>
                )}
                <Typography component="p">{row.description}</Typography>
              </div>
              <CardActions>
                <Fab
                  color="primary"
                  aria-label="IMDB"
                  className={classes.fab}
                  href={row.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="extended"
                >
                  <LocalPlayIcon className={classes.localPlayIcon} />
                  IMDB
                </Fab>
                <Fab
                  color="primary"
                  aria-label="View Scene"
                  className={classes.fab}
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="extended"
                >
                  <PlayCircleOutlineIcon
                    className={classes.playCircleOutlineIcon}
                  />
                  View Scene
                </Fab>
              </CardActions>
            </CardContent>
          </div>
        );
      })}
    </Card>
  );
}

MultiCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MultiCard);
