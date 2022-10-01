import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import About from './About';

test('renders learn react link', () => {
  render(<About />, {wrapper: MemoryRouter});
  const titleElement = screen.getByText(/A game by pello/i);
  expect(titleElement).toBeInTheDocument();
});