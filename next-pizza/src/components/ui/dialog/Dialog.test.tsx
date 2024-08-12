// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogHeader,
    DialogFooter,
    DialogOverlay,
} from '@/components/ui';

describe('Dialog component', () => {
    test('Renders Dialog when triggered', async () => {
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                </DialogContent>
            </Dialog>
        );

        expect(screen.queryByText(/Dialog Title/i)).not.toBeInTheDocument();

        await userEvent.click(screen.getByText(/Open Dialog/i));

        expect(screen.getByText(/Dialog Title/i)).toBeInTheDocument();
        expect(screen.getByText(/Dialog Description/i)).toBeInTheDocument();
    });

    test('Closes Dialog when close button is clicked', async () => {
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                    <DialogClose>Close</DialogClose>
                </DialogContent>
            </Dialog>
        );

        await userEvent.click(screen.getByText(/Open Dialog/i));
        expect(screen.getByText(/Dialog Title/i)).toBeInTheDocument();

        const closeButton = screen.getAllByText(/Close/i).find(el => el.tagName.toLowerCase() === 'button');

        if (closeButton) {
            await userEvent.click(closeButton);
        } else {
            throw new Error('Close button not found');
        }

        expect(screen.queryByText(/Dialog Title/i)).not.toBeInTheDocument();
    });

    test('Dialog renders with correct overlay class', async () => {
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
                <DialogOverlay className="custom-overlay-class" />
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                </DialogContent>
            </Dialog>
        );

        await userEvent.click(screen.getByText(/Open Dialog/i));

        const overlayElement = screen.getAllByTestId('custom-overlay').find(el => el.classList.contains('custom-overlay-class'));
        expect(overlayElement).toHaveClass('custom-overlay-class');
    });

    test('Renders Dialog components with custom content', async () => {
        render(
            <Dialog>
                <DialogTrigger>Open Dialog</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Custom Dialog Title</DialogTitle>
                    <DialogDescription>Custom Dialog Description</DialogDescription>
                    <DialogHeader>Header Content</DialogHeader>
                    <DialogFooter>Footer Content</DialogFooter>
                </DialogContent>
            </Dialog>
        );

        await userEvent.click(screen.getByText(/Open Dialog/i));

        expect(screen.getByText(/Header Content/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer Content/i)).toBeInTheDocument();
    });
});
