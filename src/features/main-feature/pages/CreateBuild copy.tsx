/* eslint-disable camelcase */
import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import { Form } from '../../../common/components/form/Form';
// import { Input } from '../../../common/components/form/Input';
// import { DatalistSelect } from '../../../common/components/form/DatalistSelect';
// import { Select } from '../../../common/components/form/Select';
// import { Password } from '../../../common/components/form/Password';
// import { getInitialServices, ListToList, Service } from '../components/ListToLIst';
// import { SecondaryButton } from '../../../common/components/buttons/SecondaryButton';
// import { PrimaryButton } from '../../../common/components/buttons/PrimaryButton';

import './CreateBuild.css';

export interface CreateBuildProps {
    heading: string;
}

export const CreateBuild: React.FC<CreateBuildProps> = () => {
    return <div>CreateBuild</div>;
};
// export const CreateBuild: React.FC<CreateBuildProps> = () => {
//     const [services, setServices] = useState(getInitialServices());
//     const [formData, setFormData] = useState({
//         created_by: '',
//         customer_name: '',
//         project_name: '',
//         build_name: '',
//         device_oem: '',
//         serial_number: '',
//         ip_address: '',
//         user_login: '',
//         password: '',
//     });

//     const handleSubmit = (data: any) => {
//         console.log('Form submitted:', data);
//         console.log({ services });
//     };

//     const onServicesChange = (updatedServices: Record<string, Service>) => {
//         setServices(updatedServices);
//     };

//     return (
//         <Form initialFormData={formData} onSubmit={handleSubmit} className="create-form">
//             <div className="card-layout">
//                 <Card className="card-with-width">
//                     <Card.Header>Build Details</Card.Header>
//                     <Card.Body>
//                         <Input name="created_by" label="Engineer Name:" />
//                         <DatalistSelect
//                             name="customer_name"
//                             label="Customer Name:"
//                             options={['Customer A', 'Customer B']} // Example options
//                         />
//                         <DatalistSelect
//                             name="project_name"
//                             label="Project Name:"
//                             options={['Project X', 'Project Y']} // Example options
//                         />
//                         <Input name="build_name" label="Build Name:" />
//                         <Select
//                             name="device_oem"
//                             label="OEM:"
//                             options={[
//                                 { value: 'oem1', label: 'OEM 1' },
//                                 { value: 'oem2', label: 'OEM 2' },
//                             ]}
//                         />
//                     </Card.Body>
//                 </Card>

//                 <Card className="card-with-width">
//                     <Card.Header>ETO Device</Card.Header>
//                     <Card.Body>
//                         <Input name="serial_number" label="Serial Number:" />
//                         <Input name="ip_address" label="IP Address:" />
//                         <Input name="user_login" label="User Login:" />
//                         <Password name="password" label="Password:" />
//                     </Card.Body>
//                 </Card>

//                 <Card className="card-with-width">
//                     <Card.Header>Services</Card.Header>
//                     <Card.Body>
//                         <ListToList services={services} onChange={onServicesChange} />
//                     </Card.Body>
//                 </Card>

//                 {services.list_item_drive_model_validation.isSelected && (
//                     <Card className="card-with-width">
//                         <Card.Header>Models / Scripts</Card.Header>
//                         <Card.Body>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <Select
//                                 name="device_oem"
//                                 label="Burn-in Script:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                             <Select
//                                 name="device_oem"
//                                 label="ISO File:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                         </Card.Body>
//                     </Card>
//                 )}

//                 {services.list_item_drive_model_validation.isSelected && (
//                     <Card className="card-with-width">
//                         <Card.Header>Models / Scripts</Card.Header>
//                         <Card.Body>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <Select
//                                 name="device_oem"
//                                 label="Burn-in Script:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                             <Select
//                                 name="device_oem"
//                                 label="ISO File:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                         </Card.Body>
//                     </Card>
//                 )}
//                 {services.list_item_drive_model_validation.isSelected && (
//                     <Card className="card-with-width">
//                         <Card.Header>Models / Scripts</Card.Header>
//                         <Card.Body>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <br></br>
//                             <textarea></textarea>
//                             <Select
//                                 name="device_oem"
//                                 label="Burn-in Script:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                             <Select
//                                 name="device_oem"
//                                 label="ISO File:"
//                                 options={[
//                                     { value: 'oem1', label: 'OEM 1' },
//                                     { value: 'oem2', label: 'OEM 2' },
//                                 ]}
//                             />
//                         </Card.Body>
//                     </Card>
//                 )}
//             </div>

//             <ButtonGroup className="d-flex justify-content-end mt-2">
//                 <SecondaryButton onClick={() => window.history.back()} label="Cancel" />
//                 <button type="reset" className="btn btn-secondary" style={{ marginLeft: '.5rem' }}>
//                     Reset
//                 </button>
//                 <PrimaryButton type="submit" label="Submit" style={{ marginLeft: '.5rem' }} />
//             </ButtonGroup>
//         </Form>
//     );
// };
