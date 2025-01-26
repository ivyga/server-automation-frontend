/* eslint-disable no-console */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/main-feature/pages/Home';
import { About } from '../features/main-feature/pages/About';
import { UnderConstruction } from '../features/main-feature/pages/UnderConstruction.js';
import { CreateBuild } from '../features/main-feature/pages/CreateBuild.js';
import { DataProvider } from './DataProvider';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './ErrorBoundary.js';

import './App.css';

export const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-4">
                <ErrorBoundary>
                    <Router>
                        <DataProvider>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/create-build" element={<CreateBuild heading="Create Build" />} />
                                <Route path="/update-build" element={<UnderConstruction heading="Update Build" />} />
                                <Route path="/view-build" element={<UnderConstruction heading="View Build" />} />
                                <Route
                                    path="/firmware-upload"
                                    element={<UnderConstruction heading="Firmware Upload" />}
                                />
                                <Route
                                    path="/firmware-bundle"
                                    element={<UnderConstruction heading="Firmware Bundle" />}
                                />
                                <Route path="/csv-upload" element={<UnderConstruction heading="CSV Upload" />} />
                                <Route path="/server-status" element={<UnderConstruction heading="Server Status" />} />
                                <Route path="/dhcp-table" element={<UnderConstruction heading="DHCP Table" />} />
                                <Route path="/statistics" element={<UnderConstruction heading="Statistics" />} />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </DataProvider>
                    </Router>
                </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};
