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
  description: {
    marginTop: theme.spacing(1)
  },
  thumbnail: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inherit',
      maxWidth: '100%',
      height: '9.375em',
      width: '16.625em',
      margin: theme.spacing(2)
    }
  },
  chip: {
    margin: theme.spacing(1)
  },
  fab: {
    margin: theme.spacing(1)
  },
  playCircleOutlineIcon: {
    marginRight: theme.spacing(1)
  },
  localPlayIcon: {
    marginRight: theme.spacing(1)
  }
});

function MultiCard(props) {
  const { classes } = props;
  const typoProps = {
    variant: 'h6',
    component: 'h2'
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title + (props.year ? '(' + props.year + ')' : '')}
        titleTypographyProps={typoProps}
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
              image={process.env.PUBLIC_URL + row.thumbnail}
              title={row.title}
            />
            <img
              className={classes.thumbnail}
              src={process.env.PUBLIC_URL + row.thumbnail}
              alt={row.title}
            />
            <CardContent>
              <div className={classes.details}>
                {props.type === 'tv_show' && (
                  <div>
                    <Typography variant="subtitle1" component="h2" gutterBottom>
                      {row.episode_title}
                    </Typography>
                    <Typography
                      gutterBottom
                      component="p"
                      color="textSecondary"
                    >
                      Season: {row.season} | Episode: {row.episode}
                    </Typography>
                  </div>
                )}
                <Typography className={classes.description} component="p">
                  {row.description}
                </Typography>
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
                  aria-label="Watch"
                  className={classes.fab}
                  href={row.url}
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
        );
      })}
    </Card>
  );
}

MultiCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MultiCard);
