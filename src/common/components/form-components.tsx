import React, { useState } from 'react';

export const Form = ({
    children,
    onSubmit,
    initialFormData,
}: {
    children: React.ReactNode;
    onSubmit: (_formData: { [key: string]: string }) => void;
    initialFormData: { [key: string]: string };
}) => {
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let key = event.target.id;
        let value = event.target.value;
        if (event.target.id.startsWith('radio-')) {
            const parts = event.target.id.split('-');
            key = parts[1];
            value = parts[2];
        }
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent page reload on form submission
        onSubmit(formData); // Call the onSubmit callback with the formData
    };

    return (
        <form onSubmit={handleSubmit}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if (
                        child.type === Input ||
                        child.type === Password ||
                        child.type === Select ||
                        child.type === DatalistSelect ||
                        child.type === GroupedSelect ||
                        child.type === RadioButtonGroup
                    ) {
                        // Only pass value and onChange to Input, Select, DatalistSelect, GroupedSelect, and RadioButtonGroup components
                        return React.cloneElement(child, {
                            // @ts-ignore
                            value: formData[child.props.id] ?? '',
                            onChange,
                        });
                    }
                }
                return child; // Return other children as they are
            })}
        </form>
    );
};

export interface InputProps {
    id: string;
    label: string;
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Input: React.FC<InputProps> = ({ id, label, value = '', onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <input
            type="text"
            className="form-control"
            id={id}
            value={value}
            onChange={onChange} // Make sure to use the onChange passed from Form
        />
    </div>
);

export interface PasswordProps {
    id: string;
    label: string;
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Password: React.FC<PasswordProps> = ({ id, label, value = '', onChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <div className="mb-3">
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
                <button type="button" className="btn btn-outline-secondary" onClick={toggleVisibility}>
                    {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
    );
};

export interface SelectProps {
    id: string;
    label: string;
    options: { value: string; label: string }[]; // Options for the select dropdown
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Select: React.FC<SelectProps> = ({ id, label, options, value = '', onChange }) => {
    const optionsWithNotSelected = value ? options : [{ label: '', value: '' }, ...options];
    return (
        <div className="mb-3">
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

export interface DatalistSelectProps {
    id: string;
    label: string;
    options: string[]; // List of values for the datalist
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const DatalistSelect: React.FC<DatalistSelectProps> = ({ id, label, options, value = '', onChange }) => (
    <div className="mb-3">
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

export interface GroupedSelectProps {
    id: string;
    label: string;
    groups: {
        label: string;
        options: { value: string; label: string }[];
    }[];
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const GroupedSelect: React.FC<GroupedSelectProps> = ({ id, label, groups, value = '', onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <select
            id={id}
            className="form-select"
            value={value}
            onChange={onChange} // Use the onChange passed from Form
        >
            {groups.map((group, groupIndex) => (
                <optgroup key={groupIndex} label={group.label}>
                    {group.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    </div>
);

export interface RadioButtonGroupProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ id, label, options, value = '', onChange }) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <div>
            {options.map((option) => (
                <div key={option.value} className="form-check">
                    <input
                        type="radio"
                        id={`radio-${id}-${option.value}`}
                        name={id}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        className="form-check-input"
                    />
                    <label htmlFor={`${id}-${option.value}`} className="form-check-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>
);
