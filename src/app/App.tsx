import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/builds/pages/Home.js';
import { About } from '../features/builds/pages/About.js';
import { UnderConstruction } from '../features/builds/pages/UnderConstruction.js';
import { CreateBuild } from '../features/builds/pages/CreateBuild.js';
import { ErrorModal, WaitingModal } from '../common/components/modals.js';
import { DataProvider } from './DataProvider';
import { ErrorBoundary } from './ErrorBoundary.js';
import { NavLink } from './Nav.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

import './App.css';

// NOTE: This is effectively the entry point for the application (technically, it is main.tsx).
// All routes and navigation is based on the map below.
const navLinks: NavLink[] = [
    { label: 'Home', href: '/', component: Home },
    {
        label: 'Builds',
        sublinks: [
            { label: 'Create', href: '/create-build', component: CreateBuild },
            { label: 'Update', href: '/update-build', component: UnderConstruction },
            { label: 'View', href: '/view-build', component: UnderConstruction },
        ],
    },
    {
        label: 'Firmware',
        sublinks: [
            { label: 'Upload', href: '/firmware-upload', component: UnderConstruction },
            { label: 'Bundle', href: '/firmware-bundle', component: UnderConstruction },
        ],
    },
    {
        label: 'Servers',
        sublinks: [
            { label: 'CSV Upload', href: '/csv-upload', component: UnderConstruction },
            { label: 'Status', href: '/server-status', component: UnderConstruction },
            { label: 'DHCP', href: '/dhcp-table', component: UnderConstruction },
        ],
    },
    { label: 'Statistics', href: '/statistics', component: UnderConstruction },
    {
        label: 'Links',
        sublinks: [
            {
                label: 'Sharepoint',
                href: 'https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Self-Service-Automation.aspx',
            },
            {
                label: 'Patch Notes',
                href: 'https://wwt.sharepoint.com/:u:/r/sites/GICSoftwareEngineering/SitePages/Self-Service-Patch-Release-Notes.aspx?csf=1&web=1&e=LoxQ3s',
            },
            {
                label: 'Manuals',
                href: 'https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Operating-Instructions_SelfService.aspx',
            },
            {
                label: 'Videos',
                href: 'https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Instructional-Videos_Self-Service.aspx',
            },
        ],
    },
    { label: 'About', href: '/about', component: About },
];

const generateRoutes = (links: NavLink[]): JSX.Element[] => {
    return links.flatMap((link) => {
        const routes: JSX.Element[] = [];
        if (link.href && link.component) {
            routes.push(<Route key={link.href} path={link.href} element={<link.component />} />);
        }
        if (link.sublinks) {
            routes.push(...generateRoutes(link.sublinks));
        }
        return routes;
    });
};

export const App = () => {
    return (
        <>
            <ErrorModal />
            <WaitingModal />
            <div className="flex flex-col min-h-screen">
                <Header navLinks={navLinks} />
                <main className="flex-1 p-4">
                    <ErrorBoundary>
                        <Router>
                            <DataProvider>
                                <Routes>
                                    {generateRoutes(navLinks)}
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </DataProvider>
                        </Router>
                    </ErrorBoundary>
                </main>
                <Footer />
            </div>
        </>
    );
};
