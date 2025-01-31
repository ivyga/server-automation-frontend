import { useEffect, useState } from 'react';
import siteLogo from '../images/site-logo.png';
import { Nav, NavLink } from './Nav';

interface HeaderProps {
    navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    });

    const [dataCenter, setDataCenter] = useState('');

    useEffect(() => {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', theme);
        if (theme === 'dark') document.body.classList.add('dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataCenter(event.target.value);
    };

    return (
        <header>
            <Nav links={navLinks} brandName="Server Provisioning" siteLogo={siteLogo}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
                        {/* TODO: Find a better way than a -2rem margin */}
                        <label htmlFor="dataCenter" style={{ marginRight: '-2.5rem' }}>
                            Data&nbsp;Center
                        </label>
                        <input
                            type="text"
                            id="dataCenter"
                            name="dataCenter"
                            value={dataCenter}
                            onChange={handleChange}
                            list="centers"
                            className="data-center"
                            aria-label="Data Center"
                        />
                        <datalist id="centers">
                            <option value="NAIC2" />
                            <option value="NAIC3" />
                        </datalist>
                    </div>
                    <div id="dm-toggle" className="bs-boolean" data-size="lg" style={{ marginTop: '6px' }}>
                        <div className="bs-switch" data-size="lg">
                            <input id="switch-cb" type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                            <span aria-hidden="true" data-inner-off-label="off" data-inner-on-label="on"></span>
                        </div>
                        <label htmlFor="switch-cb" className="bs-label !text-white">
                            &nbsp;Dark&nbsp;Mode
                        </label>
                    </div>
                </div>
            </Nav>
        </header>
    );
};
