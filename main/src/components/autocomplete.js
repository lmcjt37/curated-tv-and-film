// React
import React from 'react';
import PropTypes from 'prop-types';

// 3rd party
import Downshift from 'downshift';
import deburr from 'lodash/deburr';

// Material UI - Core
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width')
  },
  divider: {
    height: theme.spacing(2)
  }
});

function renderInput(inputProps) {
  const { InputProps, classes, ...other } = inputProps;

  return (
    <InputBase
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
      inputProps={{
        ...InputProps
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex }) {
  const isHighlighted = highlightedIndex === index;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};

function getSuggestions(value, suggestions) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }
        return keep;
      });
}

function Autocomplete(props) {
  const { classes, autoComplete, handleChange } = props;

  const onValueChange = (value, state) => {
    handleChange({
      target: {
        value: value
      }
    });
    return state;
  };

  return (
    <Downshift id="downshift-simple" onInputValueChange={onValueChange}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      }) => (
        <div className={classes.container}>
          {renderInput({
            fullWidth: true,
            InputProps: getInputProps({
              placeholder: 'Search...',
              spellCheck: false,
              onChange: handleChange
            }),
            classes
          })}
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue, autoComplete).map(
                  (suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem
                    })
                )}
              </Paper>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  );
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Autocomplete);
