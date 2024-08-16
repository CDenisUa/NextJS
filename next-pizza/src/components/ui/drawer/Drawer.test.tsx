import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {
    Drawer,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription
} from '@/components/ui';

describe('Drawer component', () => {
    test('Renders Drawer component with default props', () => {
        render(
            <Drawer>
                <DrawerTrigger>Open Drawer</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>Description</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>Close</DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        const triggerElement = screen.getByText(/Open Drawer/i);
        expect(triggerElement).toBeInTheDocument();
    });

    test('Drawer content should be hidden initially', () => {
        render(
            <Drawer>
                <DrawerTrigger>Open Drawer</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>Description</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>Close</DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        const titleElement = screen.queryByText(/Title/i);
        expect(titleElement).not.toBeInTheDocument();
    });

    test('Opens and closes Drawer on trigger and close button click', async () => {
        render(
            <Drawer>
                <DrawerTrigger>Open Drawer</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>Description</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>Close</DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        const triggerElement = screen.getByText(/Open Drawer/i);
        await userEvent.click(triggerElement);

        const titleElement = screen.getByText(/Title/i);
        expect(titleElement).toBeInTheDocument();

        const closeElement = screen.getByText(/Close/i);
        await userEvent.click(closeElement);

        expect(titleElement).not.toBeInTheDocument();
    });

    test('Applies custom className to DrawerContent', () => {
        render(
            <Drawer>
                <DrawerTrigger>Open Drawer</DrawerTrigger>
                <DrawerContent className="custom-drawer-content">
                    <DrawerHeader>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerDescription>Description</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>Close</DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        const triggerElement = screen.getByText(/Open Drawer/i);
        userEvent.click(triggerElement);

        const contentElement = screen.getByText(/Title/i).closest('.custom-drawer-content');
        expect(contentElement).toHaveClass('custom-drawer-content');
    });
});
