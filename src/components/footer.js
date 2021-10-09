// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import Typography from '@material-ui/core/Typography';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  list: {
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      height: 50,
      display: 'inline-flex'
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
      <ul className={classes.list}>
        <li className={classes.links}>
          <Typography color="textSecondary">
            Made with &hearts; by &nbsp;
            <a
              className={classes.anchor}
              target="_blank"
              rel="noopener noreferrer"
              href="https://lmcjt.com"
            >
              Luke Taylor
            </a>
            &nbsp; &copy; 2018-
            {new Date().getUTCFullYear()}
          </Typography>
        </li>
      </ul>
      <ul className={classes.list}>
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
