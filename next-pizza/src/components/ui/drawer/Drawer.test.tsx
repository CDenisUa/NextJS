// Core
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
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
});
