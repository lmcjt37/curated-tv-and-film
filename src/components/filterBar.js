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

const styles = (theme) => ({
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

const FilterBar = ({
  classes,
  years,
  filterGenre,
  handleToggleChip,
  showFilters,
  filterResults,
  handleFilter,
  filterYear,
  handleYear,
  filterOrder,
  handleOrder
}) => {
  let genreChips = filterGenre.available.map((genre, idx) => {
    let isActive =
      filterGenre.on.length === 0 || filterGenre.on.indexOf(genre) > -1;
    return (
      <Chip
        key={idx}
        size="small"
        label={genre}
        onClick={() => handleToggleChip(genre)}
        onDelete={() => handleToggleChip(genre)}
        deleteIcon={isActive ? <DoneIcon /> : null}
        color="primary"
        data-testid={`chip`}
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
    <div data-testid="filter-bar" className={classes.root}>
      <Collapse in={showFilters}>
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
                  value={filterResults}
                  onChange={handleFilter}
                  row
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio color="primary" />}
                    label="All"
                    data-testid="form-control-label"
                  />
                  <FormControlLabel
                    value="movies"
                    control={<Radio color="primary" />}
                    label="Movies"
                    data-testid="form-control-label"
                  />
                  <FormControlLabel
                    value="tv"
                    control={<Radio color="primary" />}
                    label="TV"
                    data-testid="form-control-label"
                  />
                </RadioGroup>
              </FormControl>
              {filterResults === 'movies' ? (
                <FormControl
                  data-testid="form-control-years"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="filterYear">Year</InputLabel>
                  <Select
                    value={filterYear}
                    onChange={handleYear}
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
              <FormControl
                data-testid="form-control-sort"
                className={classes.formControl}
              >
                <InputLabel htmlFor="filterOrder">Sort</InputLabel>
                <Select
                  value={filterOrder}
                  onChange={handleOrder}
                  inputProps={{
                    name: 'order',
                    id: 'filterOrder'
                  }}
                >
                  {orderOptions}
                </Select>
              </FormControl>
              <div
                data-testid="chip-container"
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
};

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterBar);
