import { useEffect, useState } from 'react';
import siteLogo from '../../images/site-logo.png';
import { NavBar } from './NavBar';
import Nav from './Nav';

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

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header>
            <Nav links={navLinks} brandName="MySite" />
            <span>hello world</span>
        </header>
    );
};
