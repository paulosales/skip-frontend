import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders skip the dishes courier page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sign Up Now/i);
  expect(linkElement).toBeInTheDocument();
});
