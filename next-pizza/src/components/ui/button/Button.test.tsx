// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import { Button } from '@/components/ui';

describe('Button component', () => {
    test('Renders Button with default styles', () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /Click Me/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-primary text-primary-foreground');
        expect(buttonElement).toHaveClass('h-10 px-4 py-2');
    });

    test('Applies additional className', () => {
        render(<Button className="custom-class">Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /Click Me/i });
        expect(buttonElement).toHaveClass('custom-class');
    });

    test('Renders Button with variant and size props', () => {
        render(<Button variant="destructive" size="lg">Delete</Button>);
        const buttonElement = screen.getByRole('button', { name: /Delete/i });
        expect(buttonElement).toHaveClass('bg-destructive text-destructive-foreground');
        expect(buttonElement).toHaveClass('h-11 px-8');
    });

    test('Handles click event', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByRole('button', { name: /Click Me/i });
        await userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Renders as a different component when asChild is true', () => {
        render(<Button asChild><a href="/test">Link Button</a></Button>);
        const linkElement = screen.getByRole('link', { name: /Link Button/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/test');
    });

    test('Button should be disabled when disabled prop is passed', () => {
        render(<Button disabled>Disabled Button</Button>);
        const buttonElement = screen.getByRole('button', { name: /Disabled Button/i });
        expect(buttonElement).toBeDisabled();
    });
});
