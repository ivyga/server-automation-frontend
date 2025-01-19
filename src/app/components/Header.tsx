import { useEffect, useState } from 'react';
import siteLogo from '../../images/site-logo.png';
import { NavBar } from './NavBar';

export const Header = () => {
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
                    <span className="brand-name">Server Provisioning&nbsp;&nbsp;</span>
                </a>
                <NavBar />
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
                <NavBar isForSmallScreens={true} />
            </div>
        </header>
    );
};
