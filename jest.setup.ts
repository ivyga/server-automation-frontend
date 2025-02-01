// Extends Jest with additional matchers from @testing-library/jest-dom
import "@testing-library/jest-dom";

// TODO: Mock global objects if needed
globalThis.fetch = jest.fn();

// Set up console error/warning suppression in tests (optional)
beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation((message) => {
        // Ignore React warnings during tests, but log other errors
        if (!message.toString().includes("React")) {
            console.warn(message);
        }
    });

    jest.spyOn(console, "warn").mockImplementation((message) => {
        if (!message.toString().includes("Deprecation")) {
            console.warn(message);
        }
    });
});

// Clean up after each test
afterEach(() => {
    jest.clearAllMocks(); // Reset all Jest mocks to avoid cross-test contamination
});

// Restore console methods after tests
afterAll(() => {
    jest.restoreAllMocks();
});
