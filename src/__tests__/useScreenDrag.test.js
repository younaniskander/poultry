const { renderHook, act } = require('@testing-library/react-hooks');
const { useScreenDrag } = require('../path/to/useScreenDrag');

describe('useScreenDrag', () => {
	let result;

	beforeEach(() => {
		result = renderHook(() => useScreenDrag()).result;
	});

	test('should initialize with default values', () => {
		expect(result.current.isDragging).toBe(false);
		expect(result.current.position).toEqual({ x: 0, y: 0 });
	});

	test('should start dragging', () => {
		act(() => {
			result.current.startDrag();
		});
		expect(result.current.isDragging).toBe(true);
	});

	test('should update position while dragging', () => {
		act(() => {
			result.current.startDrag();
			result.current.onDrag({ clientX: 100, clientY: 100 });
		});
		expect(result.current.position).toEqual({ x: 100, y: 100 });
	});

	test('should stop dragging', () => {
		act(() => {
			result.current.startDrag();
			result.current.stopDrag();
		});
		expect(result.current.isDragging).toBe(false);
	});

	test('should handle edge case of stopping drag without starting', () => {
		act(() => {
			result.current.stopDrag();
		});
		expect(result.current.isDragging).toBe(false);
	});
});