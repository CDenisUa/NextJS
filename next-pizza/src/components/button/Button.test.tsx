// Core
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// Components
import Button from './Button';

test('Renders Button component', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('Calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
