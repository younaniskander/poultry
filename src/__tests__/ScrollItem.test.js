const { render, screen } = require('@testing-library/react');
const ScrollItem = require('../ScrollItem');

describe('ScrollItem Component', () => {
    test('renders without crashing', () => {
        render(<ScrollItem />);
        const element = screen.getByTestId('scroll-item');
        expect(element).toBeInTheDocument();
    });

    test('displays the correct content', () => {
        const content = 'Test Content';
        render(<ScrollItem content={content} />);
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('handles click events', () => {
        const handleClick = jest.fn();
        render(<ScrollItem onClick={handleClick} />);
        const element = screen.getByTestId('scroll-item');
        element.click();
        expect(handleClick).toHaveBeenCalled();
    });
});