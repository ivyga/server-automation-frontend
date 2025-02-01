import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'; // Example variants
}

export const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-gray-500 hover:bg-gray-600',
        danger: 'bg-red-500 hover:bg-red-600',
        success: 'bg-green-500 hover:bg-green-600',
        warning: 'bg-yellow-500 hover:bg-yellow-600',
    };

    const variantClass = variantClasses[variant] || 'bg-blue-500 hover:bg-blue-600'; // Default to primary

    return (
        <button
            className={`px-4 py-2 text-white rounded ${variantClass}`}
            {...props} // Spread other HTML attributes
        >
            {label}
        </button>
    );
};

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, ...props }) => {
    return <Button {...props} label={label} variant="primary" />;
};

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, ...props }) => {
    return <Button {...props} label={label} variant="secondary" />;
};
