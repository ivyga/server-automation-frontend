import React, { useState } from 'react';
import { Input } from './Input';
import { Password } from './Password';
import { Select } from './Select';
import { DatalistSelect } from './DatalistSelect';
import { GroupedSelect } from './GroupedSelect';
import { RadioButtonGroup } from './RadioButtonGroup';

import './form.scss';

// NOTE: We can also use Form from react-bootstrap.
// https://react-bootstrap.netlify.app/docs/forms/form-control
// Made our own Form to have a more contro, couple labels with inputs automatically, and gain a better understanding of React.
export const Form = ({
    children,
    onSubmit,
    initialFormData,
    className = 'default',
}: {
    children: React.ReactNode;
    onSubmit: (_formData: { [key: string]: string }) => void;
    initialFormData: { [key: string]: string };
    className?: string;
}) => {
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (event: React.FormEvent) => {
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

    const cloneWithProps = (child: any) => {
        if (React.isValidElement(child)) {
            // Check if the child's type is one of the form elements
            const childType = child.type;
            const formElementTypes = [Input, Password, Select, DatalistSelect, GroupedSelect, RadioButtonGroup];

            if (formElementTypes.includes(childType)) {
                return React.cloneElement(child, {
                    value: formData[child.props.id] ?? '',
                    onChange,
                });
            }

            // If the child has children, recursively clone them
            if (child.props.children) {
                return React.cloneElement(child, {
                    children: React.Children.map(child.props.children, cloneWithProps),
                });
            }
        }
        return child;
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {React.Children.map(children, cloneWithProps)}
        </form>
    );
};
