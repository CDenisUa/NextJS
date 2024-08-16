// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui';

describe('Popover component', () => {
    test('Renders PopoverTrigger and PopoverContent', () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
        </Popover>
    );

        const triggerElement = screen.getByText(/Open Popover/i);
        expect(triggerElement).toBeInTheDocument();

        // Проверяем, что содержимое поповера скрыто по умолчанию
        const contentElement = screen.queryByText(/Popover Content/i);
        expect(contentElement).not.toBeInTheDocument();
    });

    test('Opens PopoverContent on trigger click', async () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
        </Popover>
    );

        const triggerElement = screen.getByText(/Open Popover/i);
        await userEvent.click(triggerElement);

        const contentElement = screen.getByText(/Popover Content/i);
        expect(contentElement).toBeInTheDocument();
    });

    test('Closes PopoverContent on clicking outside', async () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
        </Popover>
    );

        const triggerElement = screen.getByText(/Open Popover/i);
        await userEvent.click(triggerElement);

        const contentElement = screen.getByText(/Popover Content/i);
        expect(contentElement).toBeInTheDocument();

        await userEvent.click(document.body);

        expect(contentElement).not.toBeInTheDocument();
    });

    test('Applies additional className to PopoverContent', async () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent className="custom-class">Popover Content</PopoverContent>
        </Popover>
    );

        const triggerElement = screen.getByText(/Open Popover/i);
        await userEvent.click(triggerElement);

        const contentElement = screen.getByText(/Popover Content/i);
        expect(contentElement).toHaveClass('custom-class');
    });
});
