import React from 'react';

export interface SelectProps {
    id: string;
    label: string;
    options: { value: string; label: string }[]; // Options for the select dropdown
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Select: React.FC<SelectProps> = ({ id, label, options, value = '', onChange = () => {} }) => {
    const optionsWithNotSelected = value ? options : [{ label: '', value: '' }, ...options];
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <select
                id={id}
                className="form-select"
                value={value}
                onChange={onChange} // Use the onChange passed from Form
            >
                {optionsWithNotSelected.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
