import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Game from './Game';

test('renders learn react link', () => {
  render(<Game />, {wrapper: MemoryRouter});
  const titleElement = screen.getByRole('heading', {name: "Game"});
  expect(titleElement).toBeInTheDocument();
});