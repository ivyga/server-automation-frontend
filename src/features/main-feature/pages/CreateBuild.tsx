/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Form } from '../../../common/components/form/Form';
import { Input } from '../../../common/components/form/Input';
import { DatalistSelect } from '../../../common/components/form/DatalistSelect';
import { Select } from '../../../common/components/form/Select';
import { Password } from '../../../common/components/form/Password';

import './CreateBuild.scss';
import { ListToList } from '../components/ListToLIst';
import { SecondaryButton } from '../../../common/components/buttons/SecondaryButton';

export interface CreateBuildProps {
    heading: string;
}

export const CreateBuild: React.FC<CreateBuildProps> = () => {
    const [formData, setFormData] = useState({
        created_by: '',
        customer_name: '',
        project_name: '',
        build_name: '',
        device_oem: '',
        serial_number: '',
        ip_address: '',
        user_login: '',
        password: '',
    });

    const handleSubmit = (data: any) => {
        console.log('Form submitted:', data);
    };

    return (
        <Form initialFormData={formData} onSubmit={handleSubmit} className="create-form">
            <div className="form-layout">
                <div className="form-column">
                    <fieldset>
                        <legend>Build Details</legend>
                        <Input id="created_by" label="Engineer Name:" />
                        <DatalistSelect
                            id="customer_name"
                            label="Customer Name:"
                            options={['Customer A', 'Customer B']} // Example options
                        />
                        <DatalistSelect
                            id="project_name"
                            label="Project Name:"
                            options={['Project X', 'Project Y']} // Example options
                        />
                        <Input id="build_name" label="Build Name:" />
                        <Select
                            id="device_oem"
                            label="OEM:"
                            options={[
                                { value: 'oem1', label: 'OEM 1' },
                                { value: 'oem2', label: 'OEM 2' },
                            ]}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>ETO Device</legend>
                        <Input id="serial_number" label="Serial Number:" />
                        <Input id="ip_address" label="IP Address:" />
                        <Input id="user_login" label="User Login:" />
                        <Password id="password" label="Password:" />
                    </fieldset>
                </div>

                <div className="form-column">
                    <fieldset>
                        <legend>Services</legend>
                        <ListToList></ListToList>
                    </fieldset>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <SecondaryButton onClick={() => window.history.back()} label="Cancel" />
                <button type="reset" className="btn btn-secondary">
                    Reset
                </button>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </Form>
    );
};
