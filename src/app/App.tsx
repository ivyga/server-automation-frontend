/* eslint-disable no-console */
import React, { useState, useEffect, Component, ErrorInfo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HorizontalMenu, HamburgerMenu } from '../common/components/navbars';
import { Home } from '../features/main-feature/pages/Home';
import { About } from '../features/main-feature/pages/About';
import { StyleDemo } from '../features/main-feature/pages/StyleDemo';
import { ErrorModal, WaitingModal, displayError } from '../common/components/modals';

// eslint-disable-next-line import/extensions
import conf from '../conf/conf.js';

import './App.scss';
import siteLogo from '../images/site-logo.png';
import wwtLogo from '../images/wwt-logo.png';
import { ApiExample } from '../features/demo-api/pages/ApiExample.js';
import { FormDemo } from '../features/demo-form/pages/FormDemo.js';

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Style Demonstration', href: '/demo' },
    { label: 'API Demo', href: '/demo-api' },
    { label: 'Form Demo', href: '/demo-form' },
];

class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): { hasError: boolean } {
        return { hasError: true };
    }

    // TODO: Test Global Error Catching
    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error('Error Boundary Caught an Error:', error, info);
        displayError('An Unexpected Error Occurred', error.message);
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong. Please refresh the page.</p>;
        }
        return this.props.children;
    }
}

export const App = () => {
    useEffect(() => {
        const handleGlobalError = (event: ErrorEvent) => {
            displayError('A JavaScript Error Occurred', event.message);
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            displayError('An Unhandled Promise Rejection Occurred', String(event.reason));
        };

        window.onerror = (message, _source, _lineno, _colno, error) => {
            handleGlobalError(new ErrorEvent('error', { message: String(message), error }));
        };

        window.onunhandledrejection = handleUnhandledRejection;

        return () => {
            window.onerror = null;
            window.onunhandledrejection = null;
        };
    }, []);

    console.log(`environment: ${conf.environment}`);
    return (
        <ErrorBoundary>
            <Router>
                <ErrorModal />
                <WaitingModal />
                <div className="app-container">
                    <Header />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/demo" element={<StyleDemo />} />
                            <Route path="/demo-api" element={<ApiExample />} />
                            <Route path="/demo-form" element={<FormDemo />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ErrorBoundary>
    );
};

const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-1" style={{ height: '60px' }}>
            <div className="d-flex align-items-center">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={siteLogo} alt="Site Logo" className="me-2" style={{ height: '40px' }} />
                    <span className="brand-name">GIC Application</span>
                </a>
                <HorizontalMenu brand="MyApp" logoSrc={siteLogo} logoAlt="Site Logo" links={links} />
            </div>
            <div className="d-flex align-items-center">
                <div className="form-check form-switch me-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="themeSwitch"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                    <label className="form-check-label" htmlFor="themeSwitch">
                        Dark Mode
                    </label>
                </div>
                <HamburgerMenu brand="MyApp" logoSrc={siteLogo} logoAlt="Site Logo" links={links} />
            </div>
        </header>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={wwtLogo} alt="WWT Logo" className="footer-logo" />
            <p>&copy; {new Date().getFullYear()} World Wide Technology. All Rights Reserved.</p>
        </footer>
    );
};
