// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Components
import Header from '@/components/shared/header/Header';

test('Renders Header component with logo, heading, and subheading', () => {
    render(<Header />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');

    const heading = screen.getByText(/Pizza Bliss/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-2xl', 'uppercase', 'font-black');

    const subheading = screen.getByText(/Simply Delicious Pizza/i);
    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveClass('text-sm', 'text-gray-400', 'leading-3');
});

test('Applies border class to header', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('border', 'border-b');
});

test('Renders Container with correct className', () => {
    render(<Header />);

    const containerElement = screen.getByRole('banner').firstChild;
    expect(containerElement).toHaveClass('flex', 'items-center', 'justify-between', 'py-8');
});
