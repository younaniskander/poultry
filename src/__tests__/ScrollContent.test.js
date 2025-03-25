const { render, screen } = require('@testing-library/react');
const ScrollContent = require('../ScrollContent');

describe('ScrollContent Component', () => {
	test('renders without crashing', () => {
		render(<ScrollContent />);
		const element = screen.getByTestId('scroll-content');
		expect(element).toBeInTheDocument();
	});

	test('displays correct content', () => {
		const content = 'Sample Content';
		render(<ScrollContent content={content} />);
		expect(screen.getByText(content)).toBeInTheDocument();
	});

	test('handles empty content', () => {
		render(<ScrollContent content="" />);
		expect(screen.getByText('No content available')).toBeInTheDocument();
	});
});