import React from 'react';

export interface DatalistSelectProps {
    id: string;
    label: string;
    options: string[]; // List of values for the datalist
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const DatalistSelect: React.FC<DatalistSelectProps> = ({
    id,
    label,
    options,
    value = '',
    onChange = () => {},
}) => (
    <div className="form-group">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <input
            type="text"
            className="form-control"
            id={id}
            value={value}
            onChange={onChange} // Use the onChange passed from Form
            list={`${id}-datalist`}
        />
        <datalist id={`${id}-datalist`}>
            {options.map((option, index) => (
                <option key={index} value={option} />
            ))}
        </datalist>
    </div>
);
