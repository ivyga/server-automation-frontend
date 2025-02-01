import React from 'react';

// Note:  This puts a thin wrapper over react-bootstrap Button to make the Button definition more terse for the
// usual situation where the text displayed on the button is a simple string.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'; // Example variants
}

export const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
    // Apply different styles based on the variant
    // TODO: Does tailwind have a bs-primary?
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
