import React, { useState } from 'react';

export interface PasswordProps {
    id: string;
    label: string;
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Password: React.FC<PasswordProps> = ({ id, label, value = '', onChange = () => {} }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <div className="input-group">
                <input
                    type={isVisible ? 'text' : 'password'}
                    className="form-control"
                    id={id}
                    value={value}
                    onChange={onChange} // Make sure to use the onChange passed from Form
                />
                <button type="button" className="btn btn-secondary" onClick={toggleVisibility}>
                    {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
    );
};
