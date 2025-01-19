import React, { useState } from 'react';
import { Input } from './Input';
import { Password } from './Password';
import { Select } from './Select';
import { DatalistSelect } from './DatalistSelect';
import { GroupedSelect } from './GroupedSelect';
import { RadioButtonGroup } from './RadioButtonGroup';

// NOTE: We can also use Form from react-bootstrap.
// https://react-bootstrap.netlify.app/docs/forms/form-control
// Made our own Form to have a more contro, couple labels with inputs automatically, and gain a better understanding of React.
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
