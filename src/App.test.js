// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Revenue Aggregator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Revenue Aggregator/i);
  expect(headerElement).toBeInTheDocument();
});
