import { render, screen } from '@testing-library/react';
import { About } from './About';
import '@testing-library/jest-dom'; // Extends jest matchers for things like toBeInTheDocument.

describe('About Component', () => {
  test('renders the About component with correct headings and content', () => {
    render(<About />);

    // Check for the main heading
    expect(screen.getByRole('heading', { level: 1, name: /about/i })).toBeInTheDocument();

    // Check for paragraphs
    expect(
      screen.getByText(/this site provides a quick start for ui development\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/this project uses the following technical stack:/i)
    ).toBeInTheDocument();

    // Check for ordered lists
    const technicalStackItems = [
      /vite build tool \(see below\)/i,
      /reactjs framework \(with typescript\)/i,
      /bootstrap styling/i,
      /jest testing with react testing library/i,
    ];
    technicalStackItems.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Check for subheadings
    expect(
      screen.getByRole('heading', { level: 2, name: /vite build tool/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /advantages of a build tool like vite/i })
    ).toBeInTheDocument();

    // Check for advantages list
    const advantages = [
      /transpiles languages not understood by the broswer/i,
      /minifies the javascript output/i,
      /prevents from broswers from loading stale versions of the javascript code/i,
      /the development mode "hot reloads" changes so you can quickly see the effect in the ui/i,
    ];
    advantages.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
