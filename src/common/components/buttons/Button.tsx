import React from 'react';

// Note:  This puts a thin wrapper over react-bootstrap Button to make the Button definiton more terse for the
// usual situation where the text displayed on the button is a simple string.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: string;
}

export const Button = ({ label, variant }) => (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{label}</button>
);
