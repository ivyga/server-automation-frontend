import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    fallback?: ReactNode; // Optional fallback UI for customization
    children: ReactNode; // Wrapped child components
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: string | null;
    errorStack: string | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, errorMessage: null, errorStack: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            errorMessage: error.message,
            errorStack: error.stack || null,
        };
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        // TODO: Revisit this ErrorBoundary stuff.
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.errorMessage}</p>
                    {process.env.NODE_ENV === 'development' && this.state.errorStack && (
                        <pre
                            style={{
                                background: '#f4f4f4',
                                padding: '1rem',
                                borderRadius: '4px',
                                textAlign: 'left',
                                overflowX: 'auto',
                            }}
                        >
                            {this.state.errorStack}
                        </pre>
                    )}
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
