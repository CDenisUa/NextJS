// Core
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Types
import { TitleSize } from '@/components/shared/title/Title.types';
// Components
import { Title } from '@/components/shared/title/Title';

describe('Title component', () => {
    const sizes: { size: TitleSize; tag: string; className: string }[] = [
        { size: 'xs', tag: 'h5', className: 'text-[16px] ys-text' },
        { size: 'sm', tag: 'h4', className: 'text-[22px] ys-text' },
        { size: 'md', tag: 'h3', className: 'text-[26px] ys-text' },
        { size: 'lg', tag: 'h2', className: 'text-[32px] ys-display' },
        { size: 'xl', tag: 'h1', className: 'text-[40px] ys-display' },
        { size: '2xl', tag: 'h1', className: 'text-[48px] ys-display' },
    ];

    sizes.forEach(({ size, tag, className }) => {
        test(`Renders correct ${tag} tag with appropriate classes for size "${size}"`, () => {
            const text = `Title size ${size}`;
            render(<Title text={text} size={size} />);

            const titleElement = screen.getByText(text);

            expect(titleElement.tagName.toLowerCase()).toBe(tag);
            expect(titleElement).toHaveClass(className);
        });
    });

    test('Applies additional classes from className prop', () => {
        const text = 'Title with additional class';
        const additionalClass = 'custom-class';
        render(<Title text={text} size="md" className={additionalClass} />);

        const titleElement = screen.getByText(text);
        expect(titleElement).toHaveClass('text-[26px]', 'ys-text', additionalClass);
    });
});
