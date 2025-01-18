import { useState } from 'react';
import { PrimaryButton } from '../../../common/components/buttons';
import {
    DatalistSelect,
    Form,
    Input,
    Select,
    GroupedSelect,
    RadioButtonGroup,
    Password,
} from '../../../common/components/form-components';

export const FormDemo = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        status: '',
        message: '',
        gender: '',
    });

    const handleFormSubmit = (submittedFormData: { [key: string]: string }) => {
        // eslint-disable-next-line no-console
        console.log('Form submitted with data:', formData);
        if (!submittedFormData.name || !submittedFormData.description || submittedFormData.status) {
            setFormData((prevState) => ({
                ...prevState,
                message: 'Please fill out every field.',
            }));
        }
    };

    return (
        <div>
            <h1>Form Demo</h1>
            <div style={{ width: '400px' }}>
                <Form onSubmit={handleFormSubmit} initialFormData={formData}>
                    <Input id="name" label="Name" />
                    <Password id="password" label="Password" />
                    <Input id="status" label="Status" />
                    <Select
                        id="choice"
                        label="Choice"
                        options={[
                            { value: 'US', label: 'United States' },
                            { value: 'CA', label: 'Canada' },
                            { value: 'MX', label: 'Mexico' },
                        ]}
                    />
                    <DatalistSelect
                        id="favoriteFruit"
                        label="Favorite Fruit"
                        options={['Apple', 'Banana', 'Cherry', 'Date']}
                    />
                    <GroupedSelect
                        id="groupChoice"
                        label="Grouped Choice"
                        groups={[
                            {
                                label: 'Fruits',
                                options: [
                                    { value: 'apple', label: 'Apple' },
                                    { value: 'banana', label: 'Banana' },
                                ],
                            },
                            {
                                label: 'Vegetables',
                                options: [
                                    { value: 'carrot', label: 'Carrot' },
                                    { value: 'broccoli', label: 'Broccoli' },
                                ],
                            },
                        ]}
                    />
                    <RadioButtonGroup
                        id="gender"
                        label="Gender"
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                        ]}
                    />
                    <div
                        className="text-danger"
                        style={{
                            height: '2em',
                            width: '50%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            textAlign: 'center',
                        }}
                    >
                        &nbsp;{formData.message}
                    </div>
                    <div className="d-flex justify-content-center">
                        <PrimaryButton type="submit" label="Submit" />
                    </div>
                </Form>
            </div>
        </div>
    );
};
