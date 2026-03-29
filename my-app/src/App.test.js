import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/React With NodeJS/i);
  expect(headerElement).toBeInTheDocument();
});
