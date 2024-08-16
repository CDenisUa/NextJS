// Core
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
// Components
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from './Select';

describe('Select component', () => {
    test('Renders SelectTrigger and SelectContent', () => {
        render(
            <Select>
                <SelectTrigger>Select an option</SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
            </Select>
        );

        const triggerElement = screen.getByText(/Select an option/i);
        expect(triggerElement).toBeInTheDocument();

        const contentElement = screen.queryByText(/Option 1/i);
        expect(contentElement).not.toBeInTheDocument();
    });
});
