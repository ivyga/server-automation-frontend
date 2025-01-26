// /* eslint-disable camelcase */
// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export type Service = {
//     label: string;
//     order: number;
//     isSelected: boolean;
// };

// export const getInitialServices = (): Record<string, Service> => {
//     return {
//         list_item_hpe_license_installation: { label: 'HPE License Installation', order: 1, isSelected: false },
//         list_item_bom_validation: { label: 'BOM Validation', order: 2, isSelected: false },
//         list_item_drive_model_validation: { label: 'Drive Model Validation', order: 3, isSelected: false },
//         list_item_nic_model_validation: { label: 'NIC Model Validation', order: 4, isSelected: false },
//         list_item_firmware_update: { label: 'Firmware Update', order: 5, isSelected: false },
//         list_item_bios_configuration: { label: 'BIOS Configuration', order: 6, isSelected: false },
//         list_item_fips_configuration: { label: 'FIPS Configuration', order: 7, isSelected: false },
//         list_item_bmc_configuration: { label: 'BMC Configuration', order: 8, isSelected: false },
//         'list_item_burn-in_testing': { label: 'Burn-In Testing', order: 9, isSelected: false },
//         list_item_iso_mounting: { label: 'ISO Mounting', order: 10, isSelected: false },
//         list_item_apply_customer_credentials: { label: 'Apply Customer Credentials', order: 11, isSelected: false },
//         list_item_server_shutdown: { label: 'Server Shutdown', order: 12, isSelected: false },
//         list_item_startup_csv_generator: { label: 'Custom Startup CSV Generator', order: 13, isSelected: false },
//         list_item_custom_report_generator: { label: 'Custom Report Generator', order: 14, isSelected: false },
//         list_item_psu_model_validation: { label: 'PSU Model Validation', order: 15, isSelected: false },
//         list_item_raid_configuration: { label: 'RAID Configuration', order: 16, isSelected: false },
//     };
// };

// type ListToListProps = {
//     services: Record<string, Service>;
//     onChange: (_updatedServices: Record<string, Service>) => void; // Callback for updated services
// };

// export const ListToList: React.FC<ListToListProps> = ({ services, onChange }) => {
//     // Movement functions
//     const moveToRight = (itemKey: string): void => {
//         const updatedServices = {
//             ...services,
//             [itemKey]: { ...services[itemKey], isSelected: true },
//         };
//         onChange(updatedServices); // Notify the parent
//     };

//     const moveToLeft = (itemKey: string): void => {
//         const updatedServices = {
//             ...services,
//             [itemKey]: { ...services[itemKey], isSelected: false },
//         };
//         onChange(updatedServices); // Notify the parent
//     };

//     return (
//         <Container>
//             <Row>
//                 {/* Left List */}
//                 <Col>
//                     <h5>Available Services</h5>
//                     <ListGroup>
//                         {Object.keys(services)
//                             .filter((key) => !services[key].isSelected)
//                             .map((key) => (
//                                 <ListGroup.Item key={key} action onClick={() => moveToRight(key)}>
//                                     {services[key].label}
//                                 </ListGroup.Item>
//                             ))}
//                     </ListGroup>
//                 </Col>

//                 {/* Right List */}
//                 <Col>
//                     <h5>Selected Services</h5>
//                     <ListGroup>
//                         {Object.keys(services)
//                             .filter((key) => services[key].isSelected)
//                             .map((key) => (
//                                 <ListGroup.Item key={key} action onClick={() => moveToLeft(key)}>
//                                     {services[key].label}
//                                 </ListGroup.Item>
//                             ))}
//                     </ListGroup>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
