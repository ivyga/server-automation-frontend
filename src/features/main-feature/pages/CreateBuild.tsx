/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Form } from '../../../common/components/form/Form';
import { Input } from '../../../common/components/form/Input';
import { DatalistSelect } from '../../../common/components/form/DatalistSelect';
import { Select } from '../../../common/components/form/Select';
import { Password } from '../../../common/components/form/Password';

import './CreateBuild.scss';
import { getInitialServices, ListToList, Service } from '../components/ListToLIst';
import { SecondaryButton } from '../../../common/components/buttons/SecondaryButton';
import { PrimaryButton } from '../../../common/components/buttons/PrimaryButton';

export interface CreateBuildProps {
    heading: string;
}

export const CreateBuild: React.FC<CreateBuildProps> = () => {
    const [services, setServices] = useState(getInitialServices());
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
        console.log({ services });
    };

    const onServicesChange = (updatedServices: Record<string, Service>) => {
        setServices(updatedServices);
    };

    return (
        <Form initialFormData={formData} onSubmit={handleSubmit} className="create-form">
            <div className="form-layout">
                <div className="form-column">
                    <fieldset>
                        <legend>Build Details</legend>
                        <Input name="created_by" label="Engineer Name:" />
                        <DatalistSelect
                            name="customer_name"
                            label="Customer Name:"
                            options={['Customer A', 'Customer B']} // Example options
                        />
                        <DatalistSelect
                            name="project_name"
                            label="Project Name:"
                            options={['Project X', 'Project Y']} // Example options
                        />
                        <Input name="build_name" label="Build Name:" />
                        <Select
                            name="device_oem"
                            label="OEM:"
                            options={[
                                { value: 'oem1', label: 'OEM 1' },
                                { value: 'oem2', label: 'OEM 2' },
                            ]}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>ETO Device</legend>
                        <Input name="serial_number" label="Serial Number:" />
                        <Input name="ip_address" label="IP Address:" />
                        <Input name="user_login" label="User Login:" />
                        <Password name="password" label="Password:" />
                    </fieldset>
                </div>

                <div className="form-column">
                    <fieldset>
                        <legend>Services</legend>
                        <ListToList services={services} onChange={onServicesChange} />
                    </fieldset>
                </div>
            </div>
            {
                // TODO: Button Group to center or right buttons with the correct spacing
                // TODO: Reset Button
            }
            <div className="d-flex justify-content-end mt-2">
                <SecondaryButton onClick={() => window.history.back()} label="Cancel" />
                <button type="reset" className="btn btn-secondary" style={{ marginLeft: '.5rem' }}>
                    Reset
                </button>
                <PrimaryButton type="submit" onClick={() => {}} label="Submit" style={{ marginLeft: '.5rem' }} />
            </div>
        </Form>
    );
};
