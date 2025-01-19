import wwtLogo from '../../images/wwt-logo.png';

import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={wwtLogo} alt="WWT Logo" className="footer-logo" />
            <p>&copy; {new Date().getFullYear()} World Wide Technology. All Rights Reserved.</p>
        </footer>
    );
};
