import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />, {wrapper: MemoryRouter});
  const titleElement = screen.getByRole('heading', {name: "DwarfHammer"});
  expect(titleElement).toBeInTheDocument();
});