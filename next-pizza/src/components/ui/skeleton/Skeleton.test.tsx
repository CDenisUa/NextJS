// Core
import { render, screen } from "@testing-library/react";
// Components
import { Skeleton } from "@/components/ui";

describe('Skeleton component', () => {
    test('renders with default classes', () => {
        render(<Skeleton data-testid="skeleton" />);

        const skeletonElement = screen.getByTestId("skeleton");
        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-muted");
    });

    test('applies additional className', () => {
        render(<Skeleton className="extra-class" data-testid="skeleton" />);

        const skeletonElement = screen.getByTestId("skeleton");
        expect(skeletonElement).toHaveClass("extra-class");
        expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-muted");
    });

    test('passes other props to the root element', () => {
        render(<Skeleton data-testid="skeleton" id="skeleton-id" />);

        const skeletonElement = screen.getByTestId("skeleton");
        expect(skeletonElement).toHaveAttribute("id", "skeleton-id");
    });
});
