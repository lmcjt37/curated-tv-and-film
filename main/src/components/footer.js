// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import Typography from '@material-ui/core/Typography';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    margin: theme.spacing.unit
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li className={classes.links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lmcjt37/curated-tv-and-film"
          >
            <Typography>Repository</Typography>
          </a>
        </li>
        <li className={classes.links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lmcjt37/curated-tv-and-film/graphs/contributors"
          >
            <Typography>Contributors</Typography>
          </a>
        </li>
        <li className={classes.links}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.REACT_APP_BUILD_URL}
          >
            <Typography>
              build {process.env.REACT_APP_BUILD || 'debug'}
            </Typography>
          </a>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
