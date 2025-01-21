import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ListToList: React.FC = () => {
    // Define state types explicitly
    const [leftList, setLeftList] = useState<string[]>([
        'HPE License Installation',
        'BOM Validation',
        'Drive Model Validation',
        'NIC Model Validation',
        'Firmware Update',
        'BIOS Configuration',
        'FIPS Configuration',
        'BMC Configuration',
        'Burn-In Testing',
        'ISO Mounting',
        'Apply Customer Credentials',
        'Server Shutdown',
        'Custom Startup CSV Generator',
        'Custom Report Generator',
        'PSU Model Validation',
        'RAID Configuration',
    ]);

    const [rightList, setRightList] = useState<string[]>([]);

    // Movement functions with type annotations
    const moveToRight = (item: string): void => {
        setLeftList((prev) => prev.filter((i) => i !== item));
        setRightList((prev) => [...prev, item]);
    };

    const moveToLeft = (item: string): void => {
        setRightList((prev) => prev.filter((i) => i !== item));
        setLeftList((prev) => [...prev, item]);
    };

    return (
        <Container>
            <Row>
                {/* Left List */}
                <Col>
                    <h5>Available Services</h5>
                    <ListGroup>
                        {leftList.map((item) => (
                            <ListGroup.Item key={item} action onClick={() => moveToRight(item)}>
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                {/* Right List */}
                <Col>
                    <h5>Selected Services</h5>
                    <ListGroup>
                        {rightList.map((item) => (
                            <ListGroup.Item key={item} action onClick={() => moveToLeft(item)}>
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};
