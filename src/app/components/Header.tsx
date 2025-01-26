import { useEffect, useState } from 'react';
import siteLogo from '../../images/site-logo.png';
import { Nav, NavLink } from './Nav';

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    });

    useEffect(() => {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', theme);
        if (theme === 'dark') document.body.classList.add('dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navLinks: NavLink[] = [
        { label: 'Home', href: '/' },
        {
            label: 'Builds',
            sublinks: [
                { label: 'Create', href: '/create-build' },
                { label: 'Update', href: '/update-build' },
                { label: 'View', href: '/view-build' },
            ],
        },
        {
            label: 'Firmware',
            sublinks: [
                { label: 'Upload', href: '/firmware-upload' },
                { label: 'Bundle', href: '/firmware-bundle' },
            ],
        },
        {
            label: 'Servers',
            sublinks: [
                { label: 'CSV Upload', href: '/csv-upload' },
                { label: 'Status', href: '/server-status' },
                { label: 'DHCP', href: '/dhcp-table' },
            ],
        },
        { label: 'Statistics', href: '/statistics' },
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
    ];

    return (
        <header>
            <Nav links={navLinks} brandName="Server Provisioning" siteLogo={siteLogo}>
                {/* TODO: Make this work with without the marginTop and &nbsp; hacks.}} */}
                <div id="dm-toggle" className="bs-boolean" data-size="lg" style={{ marginTop: '6px' }}>
                    <div className="bs-switch" data-size="lg">
                        <input id="switch-cb" type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                        <span aria-hidden="true" data-inner-off-label="off" data-inner-on-label="on"></span>
                    </div>
                    <label htmlFor="switch-cb" className="bs-label !text-white">
                        &nbsp;Dark&nbsp;Mode
                    </label>
                </div>
            </Nav>
        </header>
    );
};
