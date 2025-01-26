/* eslint-disable camelcase */
// TODO: Use camelCase and adapt to snake_case somewhere, examine feasibility of copied endpoints
import React from 'react';
// import Card from 'react-bootstrap/Card';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import { getInitialServices, ListToList, Service } from '../components/ListToLIst';
// import './CreateBuild.css';
// import { useDataContext } from '../../../app/DataProvider';

export interface CreateBuildProps {
    heading: string;
}

export const CreateBuild: React.FC<CreateBuildProps> = () => {
    return <div>Create A Build</div>;
};
// export const CreateBuild: React.FC<CreateBuildProps> = () => {
//     const { customers, oems, isLoading } = useDataContext();
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

//     if (isLoading) {
//         return <p>Loading data...</p>;
//     }

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         console.log('Services:', services);
//     };

//     const onServicesChange = (updatedServices: Record<string, Service>) => {
//         setServices(updatedServices);
//     };

//     return (
//         <Form onSubmit={handleSubmit} className="create-form">
//             <div className="card-layout">
//                 {/* Build Details Card */}
//                 <Card className="card-with-width">
//                     <Card.Header>Build Details</Card.Header>
//                     <Card.Body>
//                         <Form.Group controlId="created_by">
//                             <Form.Label>Engineer Name:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="created_by"
//                                 value={formData.created_by}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="customer_name">
//                             <Form.Label>Customer Name:</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="customer_name"
//                                 value={formData.customer_name}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select Customer</option>
//                                 {customers.map((customer, index) => (
//                                     <option key={index} value={customer}>
//                                         {customer}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="project_name">
//                             <Form.Label>Project Name:</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="project_name"
//                                 value={formData.project_name}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select Project</option>
//                                 {/* Placeholder values; adapt as needed */}
//                                 <option value="Project X">Project X</option>
//                                 <option value="Project Y">Project Y</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="build_name">
//                             <Form.Label>Build Name:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="build_name"
//                                 value={formData.build_name}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="device_oem">
//                             <Form.Label>OEM:</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="device_oem"
//                                 value={formData.device_oem}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select OEM</option>
//                                 {oems.map((oem, index) => (
//                                     <option key={index} value={oem}>
//                                         {oem}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                     </Card.Body>
//                 </Card>

//                 {/* ETO Device Card */}
//                 <Card className="card-with-width">
//                     <Card.Header>ETO Device</Card.Header>
//                     <Card.Body>
//                         <Form.Group controlId="serial_number">
//                             <Form.Label>Serial Number:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="serial_number"
//                                 value={formData.serial_number}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="ip_address">
//                             <Form.Label>IP Address:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="ip_address"
//                                 value={formData.ip_address}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="user_login">
//                             <Form.Label>User Login:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="user_login"
//                                 value={formData.user_login}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="password">
//                             <Form.Label>Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                     </Card.Body>
//                 </Card>

//                 {/* Services Card */}
//                 <Card className="card-with-width">
//                     <Card.Header>Services</Card.Header>
//                     <Card.Body>
//                         <ListToList services={services} onChange={onServicesChange} />
//                     </Card.Body>
//                 </Card>
//             </div>

//             <ButtonGroup
//                 className="d-flex justify-content-center mt-2"
//                 style={{
//                     width: '100%',
//                     maxWidth: '400px',
//                     margin: '0 auto', // Center the ButtonGroup horizontally
//                 }}
//             >
//                 <Button variant="secondary" onClick={() => window.history.back()}>
//                     Cancel
//                 </Button>
//                 <Button variant="secondary" type="reset" style={{ marginLeft: '.5rem' }}>
//                     Reset
//                 </Button>
//                 <Button variant="primary" type="submit" style={{ marginLeft: '.5rem' }}>
//                     Submit
//                 </Button>
//             </ButtonGroup>
//         </Form>
//     );
// };
