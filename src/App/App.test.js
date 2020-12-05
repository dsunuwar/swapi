import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars People/i);
  expect(linkElement).toBeInTheDocument();
});
