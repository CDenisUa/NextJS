// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import { Checkbox } from '@/components/ui';

describe('Checkbox component', () => {
    test('Renders unchecked Checkbox by default', () => {
        render(<Checkbox />);
        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).not.toBeChecked();
    });

    test('Renders checked Checkbox when defaultChecked prop is passed', () => {
        render(<Checkbox defaultChecked />);
        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeChecked();
    });

    test('Checkbox applies additional className', () => {
        render(<Checkbox className="custom-class" />);
        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toHaveClass('custom-class');
    });

    test('Checkbox toggles state when clicked', async () => {
        render(<Checkbox />);
        const checkboxElement = screen.getByRole('checkbox');
        await userEvent.click(checkboxElement);
        expect(checkboxElement).toBeChecked();
        await userEvent.click(checkboxElement);
        expect(checkboxElement).not.toBeChecked();
    });

    test('Renders Check icon inside Checkbox when checked', () => {
        render(<Checkbox defaultChecked />);
        const checkIcon = screen.getByRole('checkbox').querySelector('svg');
        expect(checkIcon).toBeInTheDocument();
        expect(checkIcon).toHaveClass('h-4 w-4');
    });

    test('Checkbox should be disabled when disabled prop is passed', () => {
        render(<Checkbox disabled />);
        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeDisabled();
    });
});
