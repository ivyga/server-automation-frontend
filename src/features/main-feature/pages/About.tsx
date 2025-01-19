import React from 'react';

export const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This site provides a quick start for porting server automation development.</p>
            <p>This project uses the following technical stack:</p>
            <ol>
                <li>Vite Build Tool (see below)</li>
                <li>ReactJs framework (with TypeScript)</li>
                <li>Bootstrap styling</li>
                <li>Jest testing with React Testing Library</li>
            </ol>
            <h2>Vite Build Tool</h2>
            <p>
                Vite (pronounced "vit") was run with the "react-ts" option. Out of the box, it laided out a basic
                project structure and gave us the ability to run/debug locally and build a "single page application" for
                produciton delploy.
            </p>
            <h3>Advantages Of A Build Tool Like Vite</h3>
            <ol>
                <li>Transpiles languages not understood by the broswer (TypeScript to JavaScript, SCSS to CSS).</li>
                <li>Minifies the JavaScript output.</li>
                <li>Prevents from broswers from loading stale versions of the JavaScript code.</li>
                <li>The development mode "hot reloads" changes so you can quickly see the effect in the UI.</li>
            </ol>
        </div>
    );
};
