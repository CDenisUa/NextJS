// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// Components
import { RangeSlider } from './RangeSlider';

describe('RangeSlider component', () => {
    const defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        value: [20, 80],
        onValueChange: jest.fn(),
        formatLabel: (value: string | number) => `${value}%`,
    };

    test('Renders RangeSlider with default props', () => {
        render(<RangeSlider {...defaultProps} />);
        const firstSlider = screen.getAllByRole('slider')[0];
        expect(firstSlider).toBeInTheDocument();
    });

    test('Renders RangeSlider with correct value labels', () => {
        render(<RangeSlider {...defaultProps} />);
        const labelStart = screen.getByText('20%');
        const labelEnd = screen.getByText('80%');

        expect(labelStart).toBeInTheDocument();
        expect(labelEnd).toBeInTheDocument();
    });

});
