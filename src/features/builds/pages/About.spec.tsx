import { render, screen } from '@testing-library/react';
import { About } from './About';
import '@testing-library/jest-dom'; // Extends jest matchers for things like toBeInTheDocument.

// NOTE: The about component is only used to demonstrate how to setup a test.
describe('About Component', () => {
    test('renders the About component with correct headings and content', () => {
        render(<About />);

        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
