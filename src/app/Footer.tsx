import wwtLogo from '../images/wwt-logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={wwtLogo} alt="WWT Logo" className="footer-logo" />
            <p>&copy; {new Date().getFullYear()} Acme. All Rights Reserved.</p>
        </footer>
    );
};
