import React, { ReactNode, useState, useEffect } from 'react';

interface AlertProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    children: ReactNode;
    className?: string;
    onClose?: () => void;
}

const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
};

const iconMap = {
    success: '✔',
    error: '✖',
    warning: '⚠',
    info: 'ℹ',
};

let onCloseMe: (() => void) | undefined;

export const Alert: React.FC<AlertProps> = ({ type = 'info', children, className, onClose }) => {
    const [isClosed, setIsClosed] = useState(false);
    onCloseMe = onClose;
    if (!onCloseMe) {
        onCloseMe = () => setIsClosed(true);
    }

    if (isClosed) return null;

    return (
        <div className={`flex items-start p-4 border-l-4 rounded-md shadow-md ${alertStyles[type]} ${className || ''}`}>
            <span className="mr-3">{iconMap[type]}</span>
            <div className="flex-1">{children}</div>
            <button
                onClick={() => {
                    onCloseMe && onCloseMe();
                }}
                className="ml-4 text-gray-500 hover:text-gray-700"
            >
                ✖
            </button>
        </div>
    );
};
