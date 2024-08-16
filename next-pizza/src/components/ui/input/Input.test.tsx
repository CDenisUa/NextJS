// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import { Input } from '@/components/ui';

describe('Input component', () => {
    test('Renders Input with default props', () => {
        render(<Input placeholder="Enter text" />);
        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        );
    });

    test('Applies additional className', () => {
        render(<Input className="custom-class" placeholder="Enter text" />);
        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        expect(inputElement).toHaveClass('custom-class');
    });

    test('Renders Input with specific type', () => {
        render(<Input type="password" placeholder="Enter password" />);
        const inputElement = screen.getByPlaceholderText(/Enter password/i);
        expect(inputElement).toHaveAttribute('type', 'password');
    });

    test('Handles input change event', async () => {
        const handleChange = jest.fn();
        render(<Input placeholder="Enter text" onChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        await userEvent.type(inputElement, 'Hello');
        expect(handleChange).toHaveBeenCalledTimes(5);
    });

    test('Renders disabled Input', () => {
        render(<Input placeholder="Disabled input" disabled />);
        const inputElement = screen.getByPlaceholderText(/Disabled input/i);
        expect(inputElement).toBeDisabled();
    });
});
