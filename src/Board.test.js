import { render, screen } from "@testing-library/react";
import Board from './Board';

it('renders board element', () =>{
    render(<Board />);
    const titleElement = screen.getByRole('heading', {text: 'Battlefield'});
    expect(titleElement).toBeInTheDocument();
})
