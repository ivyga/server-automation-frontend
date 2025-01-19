/* eslint-disable no-console */
import React, { useEffect, Component, ErrorInfo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/main-feature/pages/Home';
import { About } from '../features/main-feature/pages/About';
import { StyleDemo } from '../features/main-feature/pages/StyleDemo';
import { ErrorModal, WaitingModal, displayError } from '../common/components/modals';

// eslint-disable-next-line import/extensions
import conf from '../conf/conf.js';

import './App.scss';
import { ApiExample } from '../features/demo-api/pages/ApiExample';
import { FormDemo } from '../features/demo-form/pages/FormDemo';
import { Footer } from './components/Footer';
import { Header } from './components/Header.js';
import { UnderConstruction } from '../features/main-feature/pages/UnderConstruction.js';

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
                            <Route path="/create-build" element={<UnderConstruction heading="Create Build" />} />
                            <Route path="/update-build" element={<UnderConstruction heading="Update Build" />} />
                            <Route path="/view-build" element={<UnderConstruction heading="View Build" />} />
                            <Route path="/firmware-upload" element={<UnderConstruction heading="Firmware Upload" />} />
                            <Route path="/firmware-bundle" element={<UnderConstruction heading="Firmware Bundle" />} />
                            <Route path="/csv-upload" element={<UnderConstruction heading="CSV Upload" />} />
                            <Route path="/server-status" element={<UnderConstruction heading="Server Status" />} />
                            <Route path="/dhcp-table" element={<UnderConstruction heading="DHCP Table" />} />
                            <Route path="/statistics" element={<UnderConstruction heading="Statistics" />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ErrorBoundary>
    );
};
