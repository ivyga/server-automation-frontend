import { ReactNode, useState } from 'react';
// import './Alert.css';

// NOTE: impoorting react-bootstrap's Alert is an alternative.
// https://react-bootstrap.netlify.app/docs/components/alerts/
// TODO: Decide if we want to keep this.
interface AlertProps {
    message?: string;
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    dismissible?: boolean;
}

export const Alert: React.FC<AlertProps> = ({ message, children, variant = 'primary', dismissible = true }) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className={`alert alert-${variant} ${dismissible ? 'alert-dismissible' : ''}`} role="alert">
            {message && <span>{message}</span>}
            {children}
            {dismissible && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setVisible(false)}
                ></button>
            )}
        </div>
    );
};
