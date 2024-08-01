// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Components
import { Container } from '@/components/shared/container/Container';

test('Renders Container component with children', () => {
    render(
        <Container>
            <div>Child Content</div>
        </Container>
    );
    const childElement = screen.getByText(/Child Content/i);
    expect(childElement).toBeInTheDocument();
});

test('Applies additional className', () => {
    render(
        <Container className="additional-class">
            <div>Child Content</div>
        </Container>
    );
    const containerElement = screen.getByText(/Child Content/i).parentElement;
    expect(containerElement).toHaveClass('additional-class');
    expect(containerElement).toHaveClass('mx-auto');
    expect(containerElement).toHaveClass('max-w-[1280px]');
});
