import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Autocomplete from '../../components/autocomplete';

const TestComponent = () => {
  const [autoComplete, setAutoComplete] = React.useState([]);
  const [, setShowDelete] = React.useState(false);

  const handleChange = (value) => {
    if (value) {
      setAutoComplete([{ label: 'Amazing!' }]);
    } else {
      setAutoComplete([]);
    }
  };
  return (
    <Autocomplete
      handleChange={handleChange}
      autoComplete={autoComplete}
      changeState={setShowDelete}
    />
  );
};

it('render all initial child components, where isOpen is false', async () => {
  render(<Autocomplete />);

  expect(screen.queryByTestId('suggestions')).toBeFalsy();
});

it('render all initial child components, where isOpen is true', async () => {
  render(<TestComponent />);

  await userEvent.type(screen.getByTestId('auto-complete-input'), 'a');

  await expect(screen.getByTestId('suggestions')).toBeTruthy();
  await expect(screen.getAllByText('Amazing!')).toBeTruthy();
});

//TODO - Tests functions

it('snapshot of initial component', () => {
  const { asFragment } = render(<Autocomplete />);
  expect(asFragment).toMatchSnapshot();
});
