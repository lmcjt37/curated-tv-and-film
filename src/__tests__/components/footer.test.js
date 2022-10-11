import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../../components/footer';

it('render all initial child components', async () => {
  render(<Footer />);

  expect(screen.getByTestId('footer')).toBeTruthy();
  expect(screen.getByTestId('footer-link-one')).toBeTruthy();
  expect(screen.getByTestId('footer-link-two')).toBeTruthy();
  expect(screen.getByTestId('footer-link-three')).toBeTruthy();
  expect(screen.getByTestId('footer-link-four')).toBeTruthy();
  expect(screen.getByTestId('footer-link-five')).toBeTruthy();
});

it('snapshot of initial component', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment).toMatchSnapshot();
});
