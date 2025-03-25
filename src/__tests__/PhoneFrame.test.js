const { render, screen } = require('@testing-library/react');
const PhoneFrame = require('../PhoneFrame');

describe('PhoneFrame Component', () => {
    test('renders without crashing', () => {
        render(<PhoneFrame />);
        const linkElement = screen.getByText(/phone frame/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('displays the correct title', () => {
        render(<PhoneFrame title="Test Title" />);
        const titleElement = screen.getByText(/test title/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('handles click events', () => {
        const handleClick = jest.fn();
        render(<PhoneFrame onClick={handleClick} />);
        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});