// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';

// Material icons
import DoneIcon from '@material-ui/icons/Done';

// Material Core - Styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    top: '54px',
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    },
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: `${theme.spacing(1)}px 0`,
    top: '60px'
  },
  filterBar: {
    zIndex: 1
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    },
    marginBottom: `${theme.spacing(2)}px`
  }
});

class FilterBar extends React.Component {
  render() {
    const { classes, years, filterGenre } = this.props;

    let genreChips = filterGenre.available.map((genre, idx) => {
      let isActive =
        filterGenre.on.length === 0 || filterGenre.on.indexOf(genre) > -1;
      return (
        <Chip
          key={idx}
          size="small"
          label={genre}
          onClick={() => this.props.handleToggleChip(genre)}
          onDelete={() => this.props.handleToggleChip(genre)}
          deleteIcon={isActive ? <DoneIcon /> : null}
          color="primary"
        />
      );
    });

    let orders = ['Ascending', 'Descending'];
    let orderOptions = orders.map((order, idx) => (
      <MenuItem key={idx} value={order}>
        {order}
      </MenuItem>
    ));

    let yearOptions = years.map((year, idx) => (
      <MenuItem key={idx} value={year}>
        {year}
      </MenuItem>
    ));

    return (
      <div className={classes.root}>
        <Collapse in={this.props.showFilters}>
          <AppBar
            position="relative"
            color="secondary"
            className={classes.filterBar}
          >
            <Toolbar>
              <form autoComplete="off">
                <FormControl
                  component="fieldset"
                  margin="dense"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Filter</FormLabel>
                  <RadioGroup
                    aria-label="Filter"
                    name="filter"
                    className={classes.group}
                    value={this.props.filterResults}
                    onChange={this.props.handleFilter}
                    row
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio color="primary" />}
                      label="All"
                    />
                    <FormControlLabel
                      value="movies"
                      control={<Radio color="primary" />}
                      label="Movies"
                    />
                    <FormControlLabel
                      value="tv"
                      control={<Radio color="primary" />}
                      label="TV"
                    />
                  </RadioGroup>
                </FormControl>
                {this.props.filterResults === 'movies' ? (
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="filterYear">Year</InputLabel>
                    <Select
                      value={this.props.filterYear}
                      onChange={this.props.handleYear}
                      inputProps={{
                        name: 'year',
                        id: 'filterYear'
                      }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      {yearOptions}
                    </Select>
                  </FormControl>
                ) : null}
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="filterOrder">Sort</InputLabel>
                  <Select
                    value={this.props.filterOrder}
                    onChange={this.props.handleOrder}
                    inputProps={{
                      name: 'order',
                      id: 'filterOrder'
                    }}
                  >
                    {orderOptions}
                  </Select>
                </FormControl>
                <div
                  id="chipContainer_testOnly"
                  className={classes.chipContainer}
                >
                  {genreChips}
                </div>
              </form>
            </Toolbar>
          </AppBar>
        </Collapse>
      </div>
    );
  }
}

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterBar);
