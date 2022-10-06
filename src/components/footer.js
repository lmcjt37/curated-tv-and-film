// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import Typography from '@material-ui/core/Typography';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  footer: {
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      display: 'block'
    }
  },
  inlineList: {
    display: 'block',
    flexWrap: 'wrap',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      height: 50,
      display: 'inline-flex'
    }
  },
  stackedList: {
    display: 'block',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      height: 50
    }
  },
  links: {
    margin: theme.spacing(1)
  },
  anchor: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.stackedList}>
        <li className={classes.links}>
          <Typography color="textSecondary">
            Made for Hacktoberfest 🎃 &nbsp; &copy; 2018-
            {new Date().getUTCFullYear()}
          </Typography>
        </li>
        <li className={classes.links}>
          <Typography color="textSecondary">
            Owner &nbsp;
            <a
              className={classes.anchor}
              target="_blank"
              rel="noopener noreferrer"
              href="https://lmcjt.dev"
            >
              Luke Taylor
            </a>
          </Typography>
        </li>
      </ul>
      <ul className={classes.inlineList}>
        <li className={classes.links}>
          <a
            className={classes.anchor}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lmcjt37/curated-tv-and-film"
          >
            <Typography color="textSecondary">Repository</Typography>
          </a>
        </li>
        <li className={classes.links}>
          <a
            className={classes.anchor}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lmcjt37/curated-tv-and-film/graphs/contributors"
          >
            <Typography color="textSecondary">Contributors</Typography>
          </a>
        </li>
        <li className={classes.links}>
          <a
            className={classes.anchor}
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.REACT_APP_BUILD_URL}
          >
            <Typography color="textSecondary">
              build {process.env.REACT_APP_BUILD || 'debug'}
            </Typography>
          </a>
        </li>
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
