import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React project header', () => {
  render(<App />);
  const headerElement = screen.getByText(/React project/i);
  expect(headerElement).toBeInTheDocument();
});
